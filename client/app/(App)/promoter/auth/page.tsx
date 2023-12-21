"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { useAccount, useConnect } from "wagmi";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import axios from "axios";
import { storeImg } from "@/app/_lib/helper";

const Signup = () => {
  const router = useRouter();
  const { isConnected, address } = useAccount();
  const { connect, connectors } = useConnect();

  const [mainPicValue, setMainPicValue] = useState<File | null>(null);
  const [mainPic, setMainPic] = useState<string>();
  const mainRef = useRef<HTMLInputElement>(null);

  const handlePicChange = async () => {
    const file = mainRef.current?.files![0];
    if (!file) {
      setMainPic("");
      return;
    }
    const fileTypes = ["image/png"];
    const { size, type } = file;
    if (!fileTypes.includes(type)) {
      toast.error("File format must be .png");

      return false;
    }
    setMainPicValue(file);

    if (size / 1024 / 1024 > 2) {
      toast.error("File size exceeded the limit of 2MB");
      return false;
    }
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
    }
    reader.onload = (readerEvent) => {
      setMainPic(readerEvent!.target!.result!.toString());
    };
  };

  return (
    <div className="w-screen h-screen flex relative">
      <div className="w-[53vw] flex flex-col justify-center items-center space-y-20">
        <h2 className="text-6xl mb-3">Start Crafting</h2>
        <section className="flex flex-col space-y-4 mt-7">
          {isConnected && (
            <div className=" border shadow-lg border-black border-dashed rounded-xl flex flex-col justify-center items-center space-y-2 p-5  relative">
              <input
                type="file"
                ref={mainRef}
                onChange={handlePicChange}
                hidden
                name="mainPic"
                id="mainPic"
                className="w-full bg-[#1F2029]"
              />
              {!mainPic && (
                <button
                  onClick={() => mainRef.current?.click()}
                  className="flex flex-col justify-center items-center space-y-2"
                >
                  <Image
                    src="/addpic.svg"
                    alt="hero"
                    width={40}
                    height={40}
                    className="w-12 h-12"
                  />
                  <h2 className="text-md font-medium text-center">
                    Upload your banner Image
                  </h2>
                </button>
              )}
              {mainPic && (
                <>
                  <Image
                    src={mainPic}
                    alt="mian-picture"
                    width={250}
                    height={250}
                    className="my-auto aspect-auto h-[98%] rounded-xl"
                  />
                  <button
                    type="submit"
                    onClick={() => setMainPic("")}
                    className="absolute right-2 top-2 p-1 rounded-lg bg-red-500 px-2 text-xs text-white"
                  >
                    Reset
                  </button>
                </>
              )}
            </div>
          )}
          <button
            onClick={() => {
              connect({ connector: connectors[0] });
            }}
            className="flex items-center space-x-5 hover:scale-[0.95] transition-transform duration-300 px-10 py-6 rounded-3xl shadow-lg border border-black w-[20vw]"
            disabled={isConnected}
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

          {mainPic && (
            <button
              className="bg-[#200F00] text-[#EFB359] flex justify-center items-center space-x-2  p-3 mr-1 hover:scale-[1.05] transition-transform duration-300 rounded-xl"
              onClick={async () => {
                toast.loading("Creating profile", {
                  id: "creating",
                });
                if (!mainPicValue) {
                  toast.error("Banner image not provided");
                  return;
                }
                if (!address) {
                  toast.error("Address is required");
                  return;
                }
                const imgUrl = await storeImg(
                  mainPicValue,
                  address,
                  address + " banner Image"
                );

                toast.dismiss("creating");
                toast.loading("Gathering tools", {
                  id: "create2",
                });
                try {
                  const res = await axios.post("/api/addPromoter", {
                    address,
                    bannerImg: imgUrl,
                  });

                  if (res.data.success) {
                    toast.dismiss("create2");
                    toast.success("Profile created");
                    router.push("/promoter/dashboard");
                  }
                } catch (e) {
                  console.error(e);
                  toast.dismiss("create2");
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
              <h2>Create</h2>
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
