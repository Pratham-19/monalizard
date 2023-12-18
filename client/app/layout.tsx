import type { Metadata } from "next";
import "./globals.css";

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
      <body className={"min-h-screen antialiased font-space"}>{children}</body>
    </html>
  );
}
