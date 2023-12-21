"use client";
import Footer from "@/app/_components/Footer";
import React, { useEffect } from "react";
import { PartnerDashboardQuest, QuestStatus } from "@/app/_lib/types";
import PromoterQuestCard from "@/app/_components/Card/PromoterQuestCard";
import { useAccount } from "wagmi";
import axios from "axios";

export default function Dashboard() {
  const { address } = useAccount();
  const [puzzles, setPuzzles] = React.useState([]);

  useEffect(() => {
    const getPuzzles = async () => {
      const data = await axios.post("/api/fetchPuzzles", {
        address,
      });
      setPuzzles(data.data.data);
    };
    getPuzzles();
  }, [address]);

  const quests: PartnerDashboardQuest[] = [
    {
      img: "/tree-puzzle.png",
      title: "EL Pollo Loco",
      timer: "00:05:00",
      participants: "5",
      bounty: "$1500 USDC",
      status: QuestStatus.Active,
    },
    {
      img: "/quest-hen.png",
      title: "EL Pollo Loco",
      timer: "00:05:00",
      participants: "2",
      bounty: "$1500 USDC",
      status: QuestStatus.Active,
    },
    {
      img: "/quest-hen.png",
      title: "EL Pollo Loco",
      timer: "00:05:00",
      participants: "7",
      bounty: "$1500 USDC",
      status: QuestStatus.Active,
    },
    {
      img: "/quest-hen.png",
      title: "EL Pollo Loco",
      timer: "00:05:00",
      participants: "9",
      bounty: "$1500 USDC",
      status: QuestStatus.Ended,
    },
  ];

  console.log(puzzles);

  return (
    <div className="w-full h-full my-5 overflow-scroll">
      <h1 className="text-4xl font-semibold text-center uppercase">
        DashBoard
      </h1>
      <div className="my-5 flex flex-wrap gap-3">
        {puzzles.length === 0 ? (
          <div className="min-h-[60vh] w-full flex justify-center items-center">
            <h2 className="text-xl font-semibold">No Puzzle created</h2>
          </div>
        ) : (
          puzzles.map((puzzle: any) => (
            <PromoterQuestCard
              bounty={puzzle?.price}
              img={puzzle?.img}
              status={QuestStatus.Active}
              title={puzzle?.title}
              participants={puzzle?.users.length}
              timer={puzzle?.endDate}
              key={puzzle?.img}
            />
          ))
        )}
      </div>

      <Footer className="mt-10" />
    </div>
  );
}
