import PuzzleCard from "@/app/_components/Card/PuzzleCard";
import Footer from "@/app/_components/Footer";
import React from "react";

export default function Quest() {
  return (
    <div className="w-full h-full my-5 overflow-y-scroll">
      <h1 className="text-4xl font-semibold text-center uppercase">Quests</h1>
      <div className=" my-7 space-y-8">
        {/* <PuzzleCard img={"/quest-hen.png"} /> */}
      </div>
      <Footer className="" />
    </div>
  );
}
