export interface ItemProps {
  title: string;
  slug: string;
  image: string;
  description: string;
  color: string;
  tags: string[];
  href: string;
  isWIP: boolean;
}

export const data: ItemProps[] = [
  {
    title: "Biconomy",
    slug: "biconomy",
    image:
      "https://pbs.twimg.com/profile_images/1549006291502243841/Lx0GJtn0_400x400.png",
    description:
      "The Biconomy SDK is an Account Abstraction toolkit that enables the simplest UX on your dApp or wallet",
    color: "#FF4E17",
    tags: ["Auth", "Social Login", "Bundler", "Paymaster"],
    href: "https://docs.biconomy.io/docs/overview",
    isWIP: false,
  },
  {
    title: "StackupFi",
    slug: "stackupfi",
    image:
      "https://pbs.twimg.com/profile_images/1493586970550804483/lIbtd1gQ_400x400.jpg",
    description:
      "Smart account infrastructure,simplified. Build your business on the most mature and reliable ERC-4337 infrastructure available.",
    color: "#1779ED",
    tags: ["UserOps", "Bundler", "Paymaster"],
    href: "https://docs.stackup.sh/docs",
    isWIP: false,
  },
  {
    title: "Safe (Core)",
    slug: "safe",
    image: "https://avatars.githubusercontent.com/u/109633172?s=200&v=4",
    description:
      "The Safe{Core} AA SDK main purpose is to bring Account Abstraction to life by focusing on integrating Safe with different third parties that can be provided to developers and users to abstract the complexity that comes with setting a smart contract account.",
    color: "#0EFF80",
    tags: ["Auth", "Protocol", "OnRamp", "Relay"],
    href: "https://docs.safe.global/getting-started/readme",
    isWIP: false,
  },
  {
    title: "ZeroDev",
    slug: "zerodev",
    image:
      "https://pbs.twimg.com/profile_images/1654520099225878528/V5HNWweD_400x400.jpg",
    description: "X",
    color: "#17BFE5",
    tags: ["UserOps", "Paymaster", "Bundler"],
    href: "https://docs.zerodev.app/",
    isWIP: false,
  },
  {
    title: "Candid",
    slug: "candid",
    image:
      "https://assets.coingecko.com/coins/images/12504/small/uniswap-uni.png?1600306604",
    description:
      "Candide Atelier is a set of tools that lets you build smart wallets powered by ERC-4337 Account Abstraction.",
    color: "#1F2445",
    tags: ["UserOps", "Bundler", "Paymaster"],
    href: "https://docs.candide.dev/wallet/atelier-intro/",
    isWIP: false,
  },
  {
    title: "Pimlico",
    slug: "pimlico",
    image:
      "https://assets.coingecko.com/coins/images/1481/small/cosmos_hub.png?1555657960",
    description:
      "Smart Account tools for ERC-4337 that streamline your path from vision to reality.",
    color: "#2E3148",
    tags: ["UserOps", "Bundler", "Paymaster"],
    href: "https://docs.pimlico.io/",
    isWIP: false,
  },
];
