import { Wallet } from "ethers";
import Card from "./Card";
import { CandideAccount } from "abstractionkit";
import { useEffect, useState } from "react";

export default function Candid() {
  const [candidSmartAccountAddress, setCandidSmartAccountAddress] =
    useState<string>("");

  const createCandidSmartAccount = () => {
    const smartAccount = new CandideAccount();

    const eoaSigner = new Wallet(process.env.NEXT_PUBLIC_VANITY_KEY!);

    // ERROR: on documentation it says eoaSigner / not eoasigner.address
    let res = smartAccount.createNewAccount([eoaSigner.address]);
    setCandidSmartAccountAddress(res[0]);
    console.log("Account address (sender): " + candidSmartAccountAddress);
  };

  useEffect(() => {}, [candidSmartAccountAddress]);

  return (
    <div>
      <button
        className="col-span-2 px-4 py-2 flex-shrink-0 flex-grow text-sm font-semibold text-gray-100 hover:text-white bg-gradient-to-t from-[var(--color)] to-[var(--color-light)] hover:bg-[var(--color-light)] rounded-lg flex items-center justify-between group transition-colors "
        onClick={() => createCandidSmartAccount()}
      >
        Generate Smart Account
      </button>
      <p className="mt-2">SA Address:</p>
      <p>
        {candidSmartAccountAddress
          ? candidSmartAccountAddress
          : " No Smart Account"}
      </p>
    </div>
  );
}
