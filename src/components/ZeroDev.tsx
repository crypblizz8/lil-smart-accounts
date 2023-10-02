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
    <div>
      <button
        className="col-span-2 px-4 py-2 flex-shrink-0 flex-grow text-sm font-semibold text-gray-100 hover:text-white bg-gradient-to-t from-[var(--color)] to-[var(--color-light)] hover:bg-[var(--color-light)] rounded-lg flex items-center justify-between group transition-colors "
        onClick={() => createZeroDevSmartAccount()}
      >
        Generate Smart Account
      </button>
      <p className="mt-2">SA Address:</p>
      <p>
        {zeroDevSmartAccountAddress
          ? zeroDevSmartAccountAddress
          : " No Smart Account"}
      </p>
    </div>
  );
}
