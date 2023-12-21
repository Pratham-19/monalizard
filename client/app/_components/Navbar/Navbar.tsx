"use client";
import { cn } from "../../_lib/utils";
import { getInjectiveAddress, getEthereumAddress } from "@injectivelabs/sdk-ts";
import { useAccount, useContractRead } from "wagmi";
import Image from "next/image";
import { redirect } from "next/navigation";
import Link from "next/link";
import MonaERC20 from "@/app/_lib/abi/MonaERC20.json";

const Navbar = ({ className }: { className?: string }) => {
  const { address, isDisconnected } = useAccount();
  if (isDisconnected) {
    redirect("/user/auth");
  }
  const { data, isError, isLoading } = useContractRead({
    address: MonaERC20.address as `0x${string}`,
    abi: MonaERC20.abi,
    functionName: "balanceOf",
    args: [address],
  });

  return (
    <nav
      className={cn(
        "w-full bg-[hsl(var(--primary))] flex justify-between items-center h-16 rounded-[var(--radius)] px-3 py-5",
        className
      )}
    >
      <Link href="/" className="flex space-x-2">
        <Image
          src="/logo.svg"
          alt="Navbar-logo"
          width={40}
          height={40}
          className="p-1 h-14"
        />
        <h2 className="font-extrabold my-auto uppercase text-xl">monalizard</h2>
      </Link>
      <div className="flex space-x-2">
        <button
          className={
            "bg-white flex justify-between items-center rounded-xl space-x-3 py-2 px-2 border-b-4 border-black/[0.4] hover:translate-y-[3px] hover:border-none transition-transform duration-300"
          }
        >
          <div className="flex bg-black text-white justify-center items-center h-full px-3 py-1 rounded-[var(--radius)] space-x-2  ">
            <Image
              src="/bell-not.svg"
              alt="user"
              width={40}
              height={40}
              className="h-6 w-6"
            />
            <h2 className="text-md font-medium">1</h2>
          </div>
          {!address && (
            <button
              onClick={() => {
                redirect("/user/auth");
              }}
            >
              <h2>Connect Wallet</h2>
            </button>
          )}
          {address && (
            <div className="flex items-center justify-center">
              <Image
                src="/wallet.png"
                alt="user"
                width={512}
                height={512}
                className="h-5 w-5 mr-2 grayscale "
              />
              <h2>
                {getInjectiveAddress(address)?.substring(0, 4)}...
                {getInjectiveAddress(address)?.substring(address.length - 3)}
              </h2>
            </div>
          )}
        </button>
        <div className="bg-black/70 text-white flex justify-between items-center rounded-xl space-x-3 py-2 px-3 border-b-4 border-black/[0.4] hover:translate-y-[3px] hover:border-none transition-transform duration-300 ">
          {Number(data ?? 0)} MONA
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
