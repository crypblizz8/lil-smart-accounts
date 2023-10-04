"use client";

import { createWeb3Modal, defaultWagmiConfig } from "@web3modal/wagmi/react";
import { WagmiConfig } from "wagmi";
import { polygon, goerli, mainnet, polygonMumbai } from "wagmi/chains";

import { ItemProps, data } from "@/utils/ItemBoxProps";
import NewCard from "@/components/NewCard";

// 1. Get projectId
const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID!;

// 2. Create wagmiConfig
const metadata = {
  name: "Web3Modal",
  description: "Web3Modal Example",
  url: "https://web3modal.com",
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

const chains = [mainnet, goerli, polygon, polygonMumbai];
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata });

// 3. Create modal
createWeb3Modal({ wagmiConfig, projectId, chains });

//ToDo: Add W3M + figure out the wrapper for
export default function Home() {
  return (
    <WagmiConfig config={wagmiConfig}>
      <main className="flex min-h-screen flex-col items-center p-4 sm:p-24">
        <div className="flex flex-col items-center">
          <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Lil Smart Accounts
          </h5>
          <w3m-button />
          <p className="mt-2">Fallback Vanity Address:</p>
          <p>
            {process.env.NEXT_PUBLIC_VANITY_ADDRESS?.substring(0, 6) +
              "..." +
              process.env.NEXT_PUBLIC_VANITY_ADDRESS?.substring(
                process.env.NEXT_PUBLIC_VANITY_ADDRESS.length - 4
              )}
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 mb-4 sm:mb-8 sm:grid-cols-2">
          {data.map((item: ItemProps, index: number) => (
            <NewCard index={index} {...item} key={item.slug} />
          ))}
        </div>
      </main>
    </WagmiConfig>
  );
}
