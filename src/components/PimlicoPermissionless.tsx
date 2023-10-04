import { useCallback, useEffect, useState } from "react";

import { createClient, createPublicClient, http } from "viem";
import { goerli } from "viem/chains";
import { bundlerActions, getSenderAddress } from "permissionless";
import { pimlicoBundlerActions } from "permissionless/actions/pimlico";
import {
  SimpleAccountFactory__factory,
  EntryPoint__factory,
  SimpleAccount__factory,
  EntryPoint,
  UserOperationStruct,
} from "@account-abstraction/contracts";
import { useContractWrite, useContractRead, useAccount } from "wagmi";

const publicClient = createPublicClient({
  chain: goerli,
  transport: http(),
});

const pimlicoBundlerClient = createClient({
  chain: goerli,
  transport: http(
    `https://api.pimlico.io/v1/goerli/rpc?apikey=${process.env.NEXT_PUBLIC_PIMLICO_API_KEY}`
  ),
})
  .extend(bundlerActions)
  .extend(pimlicoBundlerActions);

export default function PimlicoPermissionLess() {
  const { address } = useAccount();
  const [permisionlessAddress, setPermisionlessAddress] = useState<string>("");

  // Goerli Simple Account Factory
  const SIMPLE_ACCOUNT_FACTORY_ADDRESS =
    "0x9406Cc6185a346906296840746125a0E44976454";

  //TODO: UserOp to get the initCode

  // const getSmartAccountAddress = useCallback(async () => {
  //   const senderAddress = await getSenderAddress(publicClient, {
  //     initCode:
  //       "0x582f6c274343bcf3bc7f957fde5d87e35d5b8582f6c2774343bcf3bc0e010d72fc2de2f630c7CF57E578a026c274343bcf",
  //     entryPoint: "0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789",
  //   });
  //   console.log("Pimlico: Generated initCode:", senderAddress);
  //   setPermisionlessAddress(senderAddress);
  // }, []);

  useEffect(() => {}, [permisionlessAddress]);

  return (
    <div>
      {/* <div>{address ? address : "Not connected"}</div> */}
      {/* <button
        className="mb-2 col-span-2 px-4 py-2 flex-shrink-0 flex-grow text-sm font-semibold text-gray-100 hover:text-white bg-gradient-to-t from-[var(--color)] to-[var(--color-light)] hover:bg-[var(--color-light)] rounded-lg flex items-center justify-between group transition-colors "
        onClick={() => write()}
      >
        CreateAccount
      </button>
      {isLoading && <div>Check Wallet</div>}
      {isSuccess && <div>Transaction: {JSON.stringify(data)}</div>}
      <button
        className="col-span-2 px-4 py-2 flex-shrink-0 flex-grow text-sm font-semibold text-gray-100 hover:text-white bg-gradient-to-t from-[var(--color)] to-[var(--color-light)] hover:bg-[var(--color-light)] rounded-lg flex items-center justify-between group transition-colors "
        onClick={() => console.log("test")}
      >
        Generate Smart Account
      </button>
      <p className="mt-2">SA Address:</p>
      <p>{getSmartAddress ? getSmartAddress : " No Smart Account"}</p> */}
    </div>
  );
}
