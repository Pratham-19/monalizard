"use client";

import React from "react";
import Image from "next/image";

import { useAccount, useConnect } from "wagmi";
import { redirect } from "next/navigation";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";

const Signup = () => {
  const { isConnected,connector } = useAccount();
  const { connect, connectors,  } =
    useConnect()
  if (isConnected) {
    redirect("/user/dashboard");
  }
  console.log(isConnected,connectors);

  return (
    <div className="w-screen h-screen flex relative">
      <div className="w-[53vw] flex flex-col justify-center items-center space-y-20">
        <h2 className="text-6xl mb-4">Start Puzzling</h2>
        <section className="flex flex-col space-y-4 mt-7">
          <button
            onClick={() => {
             connect({ connector: connectors[0] });
            }}
            className="flex items-center space-x-5 hover:scale-[0.95] transition-transform duration-300 px-10 py-6 rounded-3xl shadow-lg border border-black w-[20vw]"
          >
            <Image
              src="/wallet.png"
              alt="signup"
              width={512}
              height={512}
              className="h-6 w-6"
            />
            <h2> Connect Wallet</h2>
          </button>
        </section>
      </div>
      <div className="w-[47vw] flex justify-end">
        <Image
          src={"/signup-pic.jpg"}
          alt="signup"
          width={600}
          height={1024}
          className="h-screen w-full aspect-auto"
        />
      </div>
      <div className="flex space-x-2 my-4 absolute bottom-5 left-5">
        <Image
          src="/logo.svg"
          alt="Navbar-logo"
          width={40}
          height={40}
          className="h-14 w-14"
        />
        <h2 className="font-extrabold my-auto uppercase text-2xl">
          monalizard
        </h2>
      </div>
    </div>
  );
};

export default Signup;
