import { Wallet } from "ethers";
import { CandideAccount } from "abstractionkit";
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";

export default function Candid() {
  const { address } = useAccount();
  const [candideSmartAccountAddress, setCandidSmartAccountAddress] =
    useState<string>("");

  const createCandidSmartAccount = () => {
    const smartAccount = new CandideAccount();

    // ERROR: on documentation it says eoaSigner / not eoasigner.address
    // const eoaSigner = new Wallet(process.env.NEXT_PUBLIC_VANITY_KEY!);

    let res = smartAccount.createNewAccount([address || "0x0"]);
    setCandidSmartAccountAddress(res[0]);
    console.log("Account address (sender): " + candideSmartAccountAddress);
  };

  useEffect(() => {}, [candideSmartAccountAddress]);

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
        {candideSmartAccountAddress
          ? candideSmartAccountAddress
          : " No Smart Account"}
      </p>
    </div>
  );
}
