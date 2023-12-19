"use client";

import { injectiveTestnet } from "@/app/_lib/constant";
import React from "react";
import { WagmiConfig, configureChains, createConfig } from "wagmi";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { publicProvider } from "wagmi/providers/public";

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [injectiveTestnet],
  [publicProvider()]
);

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: [new MetaMaskConnector({ chains })],
  publicClient,
  webSocketPublicClient,
});

export const WagmiProvider = function WagmiProvider({
  children,
}: React.PropsWithChildren) {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  return <WagmiConfig config={wagmiConfig}>{mounted && children}</WagmiConfig>;
};
