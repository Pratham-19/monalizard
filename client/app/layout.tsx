import type { Metadata } from "next";
import "./globals.css";
import { WagmiProvider } from "./_components/Provider/WagmiProvider";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Monalizard",
  description: "Gamefi Marketing",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={"min-h-screen antialiased font-space"}>
        <WagmiProvider>{children}</WagmiProvider>
        <Toaster />
      </body>
    </html>
  );
}
