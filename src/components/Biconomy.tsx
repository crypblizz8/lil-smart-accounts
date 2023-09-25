import Card from "./Card";
import { IBundler, Bundler } from "@biconomy/bundler";
import {
  BiconomySmartAccount,
  DEFAULT_ENTRYPOINT_ADDRESS,
} from "@biconomy/account";
import { polygon, polygonMumbai } from "wagmi/chains";
import { IPaymaster, BiconomyPaymaster } from "@biconomy/paymaster";
import { useEffect, useState } from "react";
import { Wallet, providers, ethers } from "ethers";

const provider = new providers.JsonRpcProvider(
  process.env.NEXT_PUBLIC_BICONOMY_RPC
);

const wallet = new Wallet(process.env.NEXT_PUBLIC_VANITY_KEY || "", provider);

const bundler: IBundler = new Bundler({
  bundlerUrl: process.env.NEXT_PUBLIC_BICONOMY_BUNDLER_URL!,
  chainId: polygonMumbai.id,
  entryPointAddress: DEFAULT_ENTRYPOINT_ADDRESS,
});

const paymaster: IPaymaster = new BiconomyPaymaster({
  paymasterUrl: process.env.NEXT_PUBLIC_BICONOMY_PAYMASTER_URL!,
});

const biconomySmartAccountConfig = {
  signer: wallet,
  chainId: polygon.id,
  bundler: bundler,
  paymaster: paymaster,
};

export function Biconomy() {
  const [smartAccountAddress, setSmartAccountAddress] = useState<string>("");

  async function createSmartAccount() {
    let biconomySmartAccount = new BiconomySmartAccount(
      biconomySmartAccountConfig
    );
    biconomySmartAccount = await biconomySmartAccount.init();
    console.log("owner: ", biconomySmartAccount.owner);
    const smartAccountAddressTemp =
      await biconomySmartAccount.getSmartAccountAddress();

    setSmartAccountAddress(smartAccountAddressTemp);
  }

  useEffect(() => {}, [smartAccountAddress]);

  return (
    <Card title="Biconomy">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mb-4 rounded"
        onClick={() => createSmartAccount()}
      >
        Create Smart Account
      </button>
      <p> SA Address: </p>
      <p>{smartAccountAddress ? smartAccountAddress : "No Smart Account"}</p>
    </Card>
  );
}
