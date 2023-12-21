import CharacterCard from "@/app/_components/Card/CharacterCard";
import PieceCard from "@/app/_components/Card/PieceCard";
import Footer from "@/app/_components/Footer";
import Image from "next/image";
import React from "react";

export default function Dashboard() {
  const puzzles: {
    img: string;
    title: string;
    piece: string;
    price: string;
    sponsor: string;
    link: string;
  }[] = [
    {
      img: "/quest-hen.png",
      title: "El Pollo Loco",
      piece: "14",
      price: "1000",
      sponsor: "/gnoisis.jpg",
      link: "/user/dashboard/puzzle",
    },
    {
      img: "/quest-hen.png",
      title: "El Pollo Loco",
      piece: "14",
      price: "1000",
      sponsor: "/gnoisis.jpg",
      link: "/user/dashboard/puzzle",
    },
    {
      img: "/quest-hen.png",
      title: "El Pollo Loco",
      piece: "14",
      price: "1000",
      sponsor: "/gnoisis.jpg",
      link: "/user/dashboard/puzzle",
    },
    {
      img: "/quest-hen.png",
      title: "El Pollo Loco",
      piece: "14",
      price: "1000",
      sponsor: "/gnoisis.jpg",

      link: "/user/dashboard/puzzle",
    },
    {
      img: "/quest-hen.png",
      title: "El Pollo Loco",
      piece: "14",
      price: "1000",
      sponsor: "/gnoisis.jpg",
      link: "/user/dashboard/puzzle",
    },
  ];
  return (
    <div className="w-full h-full my-5 overflow-scroll">
      <h1 className="text-4xl font-semibold text-center uppercase my-3">
        DashBoard
      </h1>

      <h2 className="text-2xl font-semibold">Active Puzzles</h2>
      <div className="my-5 overflow-x-auto flex gap-5">
        {puzzles.map((puzzle) => (
          <CharacterCard {...puzzle} key={puzzle.link} />
        ))}
      </div>
      <section className="flex justify-between">
        <h2 className="text-2xl font-semibold">Pieces Minted</h2>
        <div className="bg-black text-[#EFB359] space-x-2 px-3 py-2 rounded-xl flex justify-center items-center">
          <Image
            src="/timer.svg"
            alt="chat-pic"
            width={40}
            height={40}
            className="w-6 h-6"
          />
          <h2>Next Airdrop</h2>
          <h2>00:05:00</h2>
        </div>
      </section>
      <div className="my-5 flex flex-wrap gap-4">
        <PieceCard />
        <PieceCard />
        <PieceCard />
        <PieceCard />
        <PieceCard />
        <PieceCard />
        <PieceCard />
        <PieceCard />
      </div>
      <Footer />
    </div>
  );
}