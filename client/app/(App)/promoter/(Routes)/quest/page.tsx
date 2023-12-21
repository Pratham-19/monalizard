"use client";
import React, { useState } from "react";
import Image from "next/image";
import toast from "react-hot-toast";
import Footer from "@/app/_components/Footer";

const Create = () => {
  const [questName, setQuestName] = useState("");
  const [twitterHandle, setTwitterHandle] = useState("");

  const handleSubmit = async () => {
    if (!questName) {
      toast.error("Puzzle name is required");
      return;
    }
    if (!twitterHandle) {
      toast.error("Twitter handle is required");
      return;
    }

    toast.loading("Creating quest...", {
      id: "creating-quest",
    });
    setTimeout(() => {
      toast.dismiss("creating-quest");
      toast.success("Quest created successfully");
      setQuestName("");
      setTwitterHandle("");
    }, 1000);
  };
  return (
    <div className="w-full h-full my-5 overflow-scroll">
      <h1 className="text-4xl font-semibold text-center uppercase">
        Add Quest
      </h1>
      <div className="min-h-[60vh]">
        <label>
          <h2 className="font-[550] text-lg mt-5 mb-4">Puzzle name</h2>
        </label>
        <input
          className="w-full h-14 rounded-xl bg-white mb-5 px-5 outline-none"
          placeholder="Enter your puzzle name"
          value={questName}
          onChange={(e) => {
            setQuestName(e.target.value);
          }}
        />
        <label>
          <h2 className="font-[550] text-lg mt-5 mb-4">Twitter handle</h2>
        </label>
        <input
          className="w-full h-14 rounded-xl bg-white mb-5 px-5 outline-none"
          placeholder="@monalizard"
          value={twitterHandle}
          onChange={(e) => {
            setTwitterHandle(e.target.value);
          }}
        />
        <button
          className="bg-[#200F00] text-[#EFB359] flex justify-center items-center space-x-2  p-3 mr-1 hover:scale-[1.05] transition-transform duration-300 rounded-xl my-4"
          onClick={handleSubmit}
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
      </div>
      <Footer className="mt-8" />
    </div>
  );
};

export default Create;
