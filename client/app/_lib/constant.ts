import { Chain } from "wagmi/chains";

export const injectiveTestnet = {
  id: 1_738,
  name: "Injective Testnet",
  network: "injective",
  nativeCurrency: {
    decimals: 18,
    name: "Injective",
    symbol: "INJ",
  },
  rpcUrls: {
    default: { http: ["https://inevm-rpc.caldera.dev/"] },
    public: { http: ["https://inevm-rpc.caldera.dev/"] },
  },
  blockExplorers: {
    etherscan: {
      name: "InjectiveScope",
      url: "https://inevm.calderaexplorer.xyz/",
    },
    default: {
      name: "InjectiveScope",
      url: "https://inevm.calderaexplorer.xyz/",
    },
  },
} as const satisfies Chain;
