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
    <Card title="Candid">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mb-4 rounded"
        onClick={() => createCandidSmartAccount()}
      >
        Create Smart Account
      </button>
      <p> SA Address: </p>
      <p>
        {candidSmartAccountAddress
          ? candidSmartAccountAddress
          : "No Smart Account"}
      </p>
    </Card>
  );
}
