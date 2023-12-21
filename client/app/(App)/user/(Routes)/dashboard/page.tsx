import CharacterCard from "@/app/_components/Card/CharacterCard";
import PieceCard from "@/app/_components/Card/PieceCard";
import Footer from "@/app/_components/Footer";
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
      img: "/tree-puzzle.png",
      title: "El Pollo Loco",
      piece: "14",
      price: "1000",
      sponsor: "/injective-logo.png",
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
      </section>
      <div className="my-5 flex flex-wrap gap-4">
        <PieceCard img={"/chicken-glasses.jpg"} />
        <PieceCard img={"/c2.jpg"} />
      </div>
      <Footer />
    </div>
  );
}
