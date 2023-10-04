import { Biconomy } from "@/components/Biconomy";
import Candid from "@/components/Candid";
import Pimlico from "@/components/Pimlico";
import PimlicoPermissionLess from "@/components/PimlicoPermissionless";
import ZeroDev from "@/components/ZeroDev";

export interface ItemProps {
  title: string;
  slug: string;
  image: string;
  description: string;
  color: string;
  tags: string[];
  href: string;
  isWIP: boolean;
  children?: React.ReactNode;
}

export const data: ItemProps[] = [
  {
    title: "Biconomy",
    slug: "biconomy",
    image:
      "https://pbs.twimg.com/profile_images/1607347548615835655/b-Xw2L6i_400x400.jpg",
    description:
      "The Biconomy SDK is an Account Abstraction toolkit that enables the simplest UX on your dApp or wallet",
    color: "#FF4E17",
    tags: ["Auth", "Social Login", "Bundler", "Paymaster"],
    href: "https://docs.biconomy.io/docs/overview",
    isWIP: false,
    children: <Biconomy />,
  },
  {
    title: "Pimlico",
    slug: "pimlico",
    image:
      "https://pbs.twimg.com/profile_images/1693793364380938240/wvr-wszx_400x400.jpg",
    description:
      "Smart Account tools for ERC-4337 that streamline your path from vision to reality.",
    color: "#1F042F",
    tags: ["UserOps", "Bundler", "Paymaster"],
    href: "https://docs.pimlico.io/",
    isWIP: false,
    children: <Pimlico />,
  },
  // {
  //   title: "Pimlico (Permisionless)",
  //   slug: "pimlicopermissionless",
  //   image:
  //     "https://pbs.twimg.com/profile_images/1693793364380938240/wvr-wszx_400x400.jpg",
  //   description:
  //     "Smart Account tools for ERC-4337 that streamline your path from vision to reality.",
  //   color: "#1F042F",
  //   tags: ["UserOps", "Bundler", "Paymaster", "Ethers", "Viem"],
  //   href: "https://docs.pimlico.io/",
  //   isWIP: false,
  //   children: <PimlicoPermissionLess />,
  // },
  {
    title: "ZeroDev",
    slug: "zerodev",
    image:
      "https://pbs.twimg.com/profile_images/1582474288719880195/DavMgC0t_400x400.jpg",
    description:
      "ZeroDev provides ultra-reliable bundler access by working with multiple bundler providers.",
    color: "#17BFE5",
    tags: ["UserOps", "Paymaster", "Bundler"],
    href: "https://docs.zerodev.app/",
    isWIP: false,
    children: <ZeroDev />,
  },
  {
    title: "Candid",
    slug: "candid",
    image:
      "https://pbs.twimg.com/profile_images/1589039280999075842/JX6Aceja_400x400.jpg",
    description:
      "Candide Atelier is a set of tools that lets you build smart wallets powered by ERC-4337 Account Abstraction.",
    color: "#1F2445",
    tags: ["UserOps", "Bundler", "Paymaster"],
    href: "https://docs.candide.dev/wallet/atelier-intro/",
    isWIP: false,
    children: <Candid />,
  },

  // {
  //   title: "Alchemy",
  //   slug: "alchemy",
  //   image:
  //     "https://assets.coingecko.com/coins/images/1481/small/cosmos_hub.png?1555657960",
  //   description:
  //     "ERC-4337 Bundler APIs. Gas Manager APIs. Account Abstraction SDK. Available on the largest EVM chains.      ",
  //   color: "#2E3148",
  //   tags: ["UserOps", "Bundler", "Viem"],
  //   href: "https://docs.alchemy.com/docs/account-abstraction-overview",
  //   isWIP: false,
  // },
  // {
  //   title: "StackupFi",
  //   slug: "stackupfi",
  //   image:
  //     "https://pbs.twimg.com/profile_images/1493586970550804483/lIbtd1gQ_400x400.jpg",
  //   description:
  //     "Smart account infrastructure,simplified. Build your business on the most mature and reliable ERC-4337 infrastructure available.",
  //   color: "#1779ED",
  //   tags: ["UserOps", "Bundler", "Paymaster", "Ethers"],
  //   href: "https://docs.stackup.sh/docs",
  //   isWIP: false,
  // },
  // {
  //   title: "Safe (Core)",
  //   slug: "safe",
  //   image: "https://avatars.githubusercontent.com/u/109633172?s=200&v=4",
  //   description:
  //     "The Safe{Core} AA SDK main purpose is to bring Account Abstraction to life.",
  //   color: "#0EFF80",
  //   tags: ["Auth", "Protocol", "OnRamp", "Relay", "Ethers"],
  //   href: "https://docs.safe.global/getting-started/readme",
  //   isWIP: false,
  // },
];
