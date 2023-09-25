import Card from "./Card";
import { ECDSAProvider, ECDSAValidator } from "@zerodev/sdk";
import { PrivateKeySigner } from "@alchemy/aa-core";
import { useEffect, useState } from "react";

export default function ZeroDev() {
  const [zeroDevSmartAccountAddress, setZeroDevSmartAccountAddress] =
    useState<string>("");

  // ToDo: Revisit TS Ignore
  // Out of Date Function in Docs
  // Vanity Key is 0x000 only
  const createZeroDevSmartAccount = async () => {
    const ecdsaProvider = await ECDSAProvider.init({
      projectId: process.env.NEXT_PUBLIC_ZERODEV_PROJECT_ID!,
      owner: PrivateKeySigner.privateKeyToAccountSigner(
        //@ts-ignore
        process.env.NEXT_PUBLIC_VANITY_KEY_ZERO!
      ),
    });
    setZeroDevSmartAccountAddress(await ecdsaProvider.getAddress());
  };

  useEffect(() => {}, [zeroDevSmartAccountAddress]);

  return (
    <Card title="ZeroDev">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mb-4 rounded"
        onClick={() => createZeroDevSmartAccount()}
      >
        Create Smart Account
      </button>
      <p> SA Address: </p>
      <p>
        {zeroDevSmartAccountAddress
          ? zeroDevSmartAccountAddress
          : "No Smart Account"}
      </p>
    </Card>
  );
}
