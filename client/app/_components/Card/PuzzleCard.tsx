"use client";
import Image from "next/image";
import React, { useState } from "react";
import { buttonVariants } from "../ui/button";
import toast from "react-hot-toast";
import { useAccount } from "wagmi";
import axios from "axios";

const PuzzleCard = ({
  img,
  pieces,
  price,
  title,
  desc,
  participants,
  time,
  sponsorImg,
  user,
  id,
}: {
  img: string;
  pieces: string;
  price: string;
  title: string;
  desc: string;
  participants: string;
  time: string;
  sponsorImg: string;
  user?: String[];
  id?: String;
}) => {
  const { address } = useAccount();

  const [enroll, setEnrolled] = useState(false);
  return (
    <div className="w-full border my-3 border-[hsl(var(--primary))] flex rounded-xl overflow-hidden shadow-lg backdrop-blur-lg">
      <section className="w-[23%] flex justify-center items-center">
        <Image
          src={img}
          alt="hen-quest"
          width={1024}
          height={1024}
          className="rounded-xl px-2 py-1 my-auto"
        />
      </section>
      <section className="w-[55%] flex flex-col justify-center space-y-5 py-3 px-2">
        <h2 className="text-3xl font-semibold leading-5">{title}</h2>
        <h3 className="basis-[40%]">{desc}</h3>
        <div className="flex space-x-3">
          <button
            className={buttonVariants({
              variant: "outline",
              className:
                "hover:scale-[0.95] transition-transform duration-300 space-x-2 cursor-default",
            })}
          >
            <Image
              src="/participants.svg"
              alt="chat-pic"
              width={40}
              height={40}
              className="w-6 h-6"
            />
            <h2>{participants} participants</h2>
          </button>
          <button
            disabled={enroll}
            className={buttonVariants({
              variant: "outline",
              className:
                "hover:scale-[0.95] transition-transform duration-300 space-x-2",
            })}
            onClick={async () => {
              toast.loading("Enrolling", {
                id: "enroll",
              });
              user?.push(address!);
              try {
                const resp = await axios.post("/api/addUserPuzzle", {
                  users: user,
                  id,
                });
                const resp2 = await axios.post("/api/addPuzzleUser", {
                  address,
                  id,
                });
                if (resp.data.success && resp2.data.success) {
                  toast.dismiss("enroll");
                  setEnrolled(true);
                  toast.success("Enrolled");
                }
              } catch (e) {
                toast.dismiss("enroll");
                console.log(e);
                toast.error("err enrolling");
              }
            }}
          >
            <Image
              src="/puzzle.svg"
              alt="puzzle-pic"
              width={40}
              height={40}
              className="w-6 h-6"
            />
            <h2>{enroll ? "Enrolled" : "Enroll"}</h2>
          </button>
        </div>
      </section>
      <section className="w-[22%] bg-[hsl(var(--primary))] p-2 flex flex-col items-center justify-around">
        <section className="h-[55%] bg-black flex flex-col rounded-xl overflow-hidden">
          <div className="h-[52%]">
            <Image
              src={sponsorImg}
              alt="ques-sponsor"
              width={250}
              height={250}
              className="h-16 object-cover"
            />
          </div>
          <div className="h-[48%] flex flex-col justify-center items-center mt-1 py-1">
            <section className="flex space-x-2 justify-center items-center ">
              <Image
                src="/timer.svg"
                alt="timer"
                width={40}
                height={40}
                className="w-6 h-6"
              />
              <h2 className="font-semibold text-lg text-[#EFB359]">
                Expires on:
              </h2>
            </section>
            <h2 className="font-semibold text-lg text-[#EFB359]">
              {/* {format(time, "do MMM yyyy")} */}
              {time}
            </h2>
          </div>
        </section>
        <section className="flex justify-center items-center space-x-2">
          <Image
            src="/puzzle.svg"
            alt="chat-pic"
            width={40}
            height={40}
            className="w-6 h-6"
          />
          <h2 className="font-semibold text-2xl">{pieces} Pieces</h2>
        </section>
        <section className="flex justify-center items-center space-x-1">
          <Image
            src="/bounty.svg"
            alt="chat-pic"
            width={40}
            height={40}
            className="w-6 h-6"
          />
          <h2 className="font-semibold text-2xl">{price}</h2>
        </section>
      </section>
    </div>
  );
};

export default PuzzleCard;
