import Image from "next/image";
import React from "react";
import {
  prepareWriteContract,
  waitForTransaction,
  writeContract,
} from "wagmi/actions";
// import MarketPlace from "@/app/_abis/abi/MarketPlace.json";
// import toast from "react-hot-toast";

const MarketplaceCard = ({ img,price,title,piece }: { img: string
price: string,
title: string,
piece: string,
}) => {
  return (
    <div className="bg-white border-[1.5px] my-2 border-black flex flex-col rounded-2xl overflow-hidden w-56 hover:scale-[1.03] transition-transform duration-300 shadow-xl backdrop-blur-md ">
      <section className="h-[64%]">
        <Image
          src={img}
          alt="hen-quest"
          width={1024}
          height={1024}
          className="rounded-t-xl my-auto w-full h-full"
        />
      </section>
      <section className="h-[45%] flex flex-col space-y-3 py-3 px-2">
        <h2 className="text-lg font-semibold text-center">{title}</h2>
        <section className="flex space-x-2 justify-center items-center">
          <Image
            src="/puzzle.svg"
            alt="chat-pic"
            width={40}
            height={40}
            className="w-6 h-6"
          />
          <h2>{piece}</h2>
          {/* <h2>#3 &quot;Glasses&quot;</h2> */}
        </section>
        <section className="mb-5 lg:mb-8 flex space-x-2 justify-between items-center rounded-2xl border-[1.5px] border-black">
          <Image
            src="/price-tag.svg"
            alt="chat-pic"
            width={40}
            height={40}
            className="w-6 h-6 ml-4"
          />
          <h2 className="font-semibold">
            
          {price}
            </h2>
          <button
            className="text-sm bg-black text-[#EFB359] uppercase rounded-2xl px-3 h-full py-1 self-end"
            onClick={async () => {
              //   const { request } = await prepareWriteContract({
              //     address: MarketPlace.address as `0x${string}`,
              //     abi: MarketPlace.abi,
              //     functionName: "buyItem",
              //     args: [1],
              //   });
              //   const { hash: uploadyERC } = await writeContract(request);
              //   await waitForTransaction({ hash: uploadyERC })
              //     .then(() => console.log("transaction confirmed"))
              //     .catch((error) => {
              //       toast.dismiss("uploading");
              //       console.log("error", error);
              //     });
            }}
          >
            Buy
          </button>
        </section>
      </section>
    </div>
  );
};

export default MarketplaceCard;
