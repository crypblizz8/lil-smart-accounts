import { useEffect, useState } from "react";
import { ethers, Wallet } from "ethers";

import {
  SimpleAccountFactory__factory,
  EntryPoint__factory,
  SimpleAccount__factory,
  EntryPoint,
  UserOperationStruct,
} from "@account-abstraction/contracts";

export default function Pimlico() {
  const [pimlicoSmartAccountAddress, setPimlicoSmartAccountAddress] =
    useState<string>("");

  const createPimlicoSmartAccount = async () => {
    const SIMPLE_ACCOUNT_FACTORY_ADDRESS =
      "0x9406Cc6185a346906296840746125a0E44976454";

    const lineaProvider = new ethers.providers.StaticJsonRpcProvider(
      process.env.NEXT_PUBLIC_LINEAR_PROVIDER
    );

    const wallet = new Wallet(
      process.env.NEXT_PUBLIC_VANITY_KEY || "",
      lineaProvider
    );

    const simpleAccountFactory = SimpleAccountFactory__factory.connect(
      SIMPLE_ACCOUNT_FACTORY_ADDRESS!,
      lineaProvider
    );

    const initCode = ethers.utils.hexConcat([
      SIMPLE_ACCOUNT_FACTORY_ADDRESS,
      simpleAccountFactory.interface.encodeFunctionData("createAccount", [
        wallet.address,
        0,
      ]),
    ]);

    console.log("Pimlico: Generated initCode:", initCode);
    const ENTRY_POINT_ADDRESS = "0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789";

    const entryPoint = EntryPoint__factory.connect(
      ENTRY_POINT_ADDRESS,
      lineaProvider
    );

    const senderAddress = await entryPoint.callStatic
      .getSenderAddress(initCode)
      .then(() => {
        throw new Error("Expected getSenderAddress() to revert");
      })
      .catch((e) => {
        const data = e.message.match(/0x6ca7b806([a-fA-F\d]*)/)?.[1];
        if (!data) {
          return Promise.reject(new Error("Failed to parse revert data"));
        }
        const addr = ethers.utils.getAddress(`0x${data.slice(24, 64)}`);
        return Promise.resolve(addr);
      });

    console.log("Calculated sender address:", senderAddress);
    setPimlicoSmartAccountAddress(senderAddress);
  };

  useEffect(() => {}, [pimlicoSmartAccountAddress]);

  return (
    <div>
      <button
        className="col-span-2 px-4 py-2 flex-shrink-0 flex-grow text-sm font-semibold text-gray-100 hover:text-white bg-gradient-to-t from-[var(--color)] to-[var(--color-light)] hover:bg-[var(--color-light)] rounded-lg flex items-center justify-between group transition-colors "
        onClick={() => createPimlicoSmartAccount()}
      >
        Generate Smart Account
      </button>
      <p className="mt-2">SA Address:</p>
      <p>
        {pimlicoSmartAccountAddress
          ? pimlicoSmartAccountAddress
          : " No Smart Account"}
      </p>
    </div>
  );
}
