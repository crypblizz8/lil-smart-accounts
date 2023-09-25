"use client";

import { Biconomy } from "@/components/Biconomy";
import { createWeb3Modal, defaultWagmiConfig } from "@web3modal/wagmi/react";
import { WagmiConfig } from "wagmi";
import { polygon, mainnet, polygonMumbai } from "wagmi/chains";

// SC Components
import Candid from "@/components/Candid";
import ZeroDev from "@/components/ZeroDev";
import Pimlico from "@/components/Pimlico";
import ItemBox from "@/components/ItemBox";
import { ItemProps, data } from "@/utils/ItemBoxProps";

// 1. Get projectId
const projectId = "32afa9365d33d07d8c8ee6fbb56bdccb";

// 2. Create wagmiConfig
const chains = [mainnet, polygon, polygonMumbai];

const wagmiConfig = defaultWagmiConfig({
  chains,
  projectId,
  appName: "Web3Modal",
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
        {/* <div className="flex flex-row">
          <Biconomy />
          <Candid />
        </div>
        <div className="flex flex-row">
          <ZeroDev />
          <Pimlico />
        </div> */}
        <div className="grid grid-cols-1 gap-4 mb-4 sm:mb-8 sm:grid-cols-2">
          {data.map((item: ItemProps, index: number) => (
            <ItemBox index={index} {...item} key={item.slug} />
          ))}
        </div>
      </main>
    </WagmiConfig>
  );
}
