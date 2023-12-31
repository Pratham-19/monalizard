"use client";

import React from "react";
import Image from "next/image";
import { useAccount, useConnect } from "wagmi";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import axios from "axios";

const Signup = () => {
  const router = useRouter();
  const { isConnected, address } = useAccount();
  const { connect, connectors } = useConnect();

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
            {isConnected ? (
              <h2>
                {address?.substring(0, 4)}...
                {address?.substring(address.length - 4, address.length)}
              </h2>
            ) : (
              <h2>Connect Wallet</h2>
            )}
          </button>

          {isConnected && (
            <button
              className="bg-[#200F00] text-[#EFB359] flex justify-center items-center space-x-2  p-3 mr-1 hover:scale-[1.05] transition-transform duration-300 rounded-xl"
              onClick={async () => {
                if (!address) {
                  toast.error("Address is required");
                  return;
                }
                toast.loading("Creating profile", {
                  id: "creating",
                });
                try {
                  const res = await axios.post("/api/addUser", {
                    address,
                  });
                  if (res.data.success) {
                    toast.dismiss("creating");
                    toast.success("Profile created");
                    router.push("/user/dashboard");
                  }
                } catch (e) {
                  console.error(e);
                  toast.dismiss("creating");
                  toast.error("Profile creation failed");
                  return;
                }
              }}
            >
              <Image
                src="/submit.svg"
                alt="hero"
                width={40}
                height={40}
                className="w-6 h-6"
              />
              <h2>Create Account</h2>
            </button>
          )}
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
