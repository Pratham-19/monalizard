import Image from "next/image";
import Link from "next/link";
import React from "react";

const FollowCard = () => {
  return (
    <div className="bg-white border-[1.5px] my-2 border-black flex flex-col rounded-2xl overflow-hidden w-52 hover:scale-[1.02] transition-transform duration-300 shadow-xl ml-2 ">
      <section className="h-[62%]">
        <Image
          src={"/quest-hen.png"}
          alt="hen-quest"
          width={1024}
          height={1024}
          className="rounded-t-xl my-auto w-full h-full"
        />
      </section>
      <section className="h-[38%] flex flex-col space-y-3 py-3 px-2">
        <h2 className="text-lg font-semibold text-center">El Pollo Loco</h2>
        <h2 className="text-center my-2">Follow to get 1 more piece</h2>

        <Link
          href="https://twitter.com/Injective_"
          className="mb-10 flex justify-center items-center space-x-3 text-sm bg-black text-[#EFB359] uppercase rounded-2xl px-3 h-full py-1"
        >
          <Image
            src="/puzzle-yellow.svg"
            alt="chat-pic"
            width={40}
            height={40}
            className="w-6 h-6"
          />
          <h2>Follow Twitter</h2>
        </Link>
      </section>
    </div>
  );
};

export default FollowCard;
