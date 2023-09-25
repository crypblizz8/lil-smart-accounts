"use client";

import { createWeb3Modal, defaultWagmiConfig } from "@web3modal/wagmi/react";
import { WagmiConfig } from "wagmi";
import { polygon, mainnet, polygonMumbai } from "wagmi/chains";

import ItemBox from "@/components/ItemBox";
import { ItemProps, data } from "@/utils/ItemBoxProps";

// 1. Get projectId
const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID!;

// 2. Create wagmiConfig
const chains = [mainnet, polygon, polygonMumbai];

const wagmiConfig = defaultWagmiConfig({
  chains,
  projectId,
  appName: "Lil Smart Accounts",
});

createWeb3Modal({ wagmiConfig, projectId, chains });

export default function Home() {
  return (
    <WagmiConfig config={wagmiConfig}>
      <header className="flex justify-end">
        <w3m-button />
      </header>
      <main className="flex min-h-screen flex-col items-center p-24">
        <div className="flex flex-col">
          <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Lil Smart Accounts
          </h5>
        </div>
        <div className="grid grid-cols-1 gap-4 mb-4 sm:mb-8 sm:grid-cols-2">
          {data.map((item: ItemProps, index: number) => (
            <ItemBox index={index} {...item} key={item.slug} />
          ))}
        </div>
      </main>
    </WagmiConfig>
  );
}
