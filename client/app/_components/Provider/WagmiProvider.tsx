"use client";

import { injectiveTestnet } from "@/app/_lib/constant";
import React from "react";
import Spinner from "react-spinkit";
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

  if (!mounted) {
    return (
      <div className="w-screen h-screen flex flex-col space-y-3 justify-center items-center">
        <Spinner name="pacman" color="#f3a127" />
        <h2 className="text-lg my-2">Loading...</h2>
      </div>
    );
  }

  return <WagmiConfig config={wagmiConfig}>{mounted && children}</WagmiConfig>;
};
