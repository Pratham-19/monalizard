import Image from "next/image";
import Link from "next/link";
import React from "react";

const CharacterCard = ({
  img,
  title,
  piece,
  price,
  sponsor,
  link,
}: {
  img: string;
  title: string;
  piece: string;
  price: string;
  sponsor: string;
  link: string;
}) => {
  return (
    <Link
      href={link}
      className="min-w-[30vw] max-w-[32vw] border-[1.6px] my-2 border-black flex rounded-xl overflow-hidden shadow-lg hover:scale-[1.03] transition-transform duration-300 ml-2"
    >
      <section className="relative w-[48%] flex flex-col items-center overflow-hidden  p-2">
        <Image
          src={img}
          alt="character-img"
          width={1024}
          height={1024}
          className="rounded-xl my-auto"
        />
        <button className="flex justify-center items-center space-x-3 text-sm bg-black text-[#EFB359] uppercase rounded-b-xl h-fit w-full py-1 px-2 ">
          <Image
            src="/puzzle-yellow.svg"
            alt="chat-pic"
            width={40}
            height={40}
            className="w-6 h-6"
          />
          <h2>Go To Puzzle</h2>
        </button>
      </section>
      <section className="w-[52%] flex flex-col justify-around items-center py-3 px-2">
        <div className="h-[70%] flex flex-col justify-around items-center">
          <h2 className="text-2xl font-semibold">{title}</h2>
          <div className="flex justify-between space-x-2">
            <section className="flex justify-center items-center space-x-2">
              <Image
                src="/puzzle.svg"
                alt="chat-pic"
                width={40}
                height={40}
                className="w-4 h-4"
              />
              <h2 className="font-semibold text-lg">{piece} Pieces</h2>
            </section>
            <section className="flex justify-center items-center space-x-2">
              <Image
                src="/bounty.svg"
                alt="chat-pic"
                width={40}
                height={40}
                className="w-6 h-6"
              />
              <h2 className="font-semibold text-lg text-start">
                ${price} USDC
              </h2>
            </section>
          </div>
          {/* <section className="flex justify-center items-center space-x-1">
            <Image
              src="/bounty.svg"
              alt="chat-pic"
              width={40}
              height={40}
              className="w-6 h-6"
            />
            <h2 className="font-semibold text-lg">Achieved on 19/11/2023</h2>
          </section> */}
        </div>
        <section className="flex flex-col items-center justify-around">
          <section className="bg-black flex flex-col rounded-xl overflow-hidden">
            <div className="h-[48%] flex flex-col justify-center items-center">
              <section className="flex space-x-2 justify-center items-center ">
                <Image
                  src="/tick-dashboard.svg"
                  alt="timer"
                  width={40}
                  height={40}
                  className="w-6 h-6"
                />
                <h2 className="font-semibold text-lg text-[#EFB359]">
                  Sponsored by
                </h2>
              </section>
            </div>
            <div className="h-[52%]">
              <Image
                src={sponsor}
                alt="ques-sponsor"
                width={250}
                height={250}
                className=""
              />
            </div>
          </section>
        </section>
      </section>
    </Link>
  );
};

export default CharacterCard;
