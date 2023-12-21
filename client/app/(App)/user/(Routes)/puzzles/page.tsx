"use client";

import PuzzleCard from "@/app/_components/Card/PuzzleCard";
import Footer from "@/app/_components/Footer";
import axios from "axios";
import React, { useEffect } from "react";

const puzzles1: {
  img: string;
  pieces: string;
  price: string;
  title: string;
  desc: string;
  participants: string;
  time: string;
  sponsorImg: string;
}[] = [
  {
    img: "/quest-hen.png",
    sponsorImg: "/gnoisis.jpg",
    pieces: "10",
    price: "1000",
    title: '"EL POLLO LOCO"',
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere obcaecati facilis a consequatur, repudiandae voluptates! Quisquam, voluptatum. Quisquam, voluptatum",
    participants: "10",
    time: "22nd Dec 2023",
  },
  {
    img: "/tree-puzzle.png",
    sponsorImg: "/injective-logo.png",
    pieces: "15",
    price: "1500",
    title: "LA Tree",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere obcaecati facilis a consequatur, repudiandae voluptates! Quisquam, voluptatum. Quisquam, voluptatum.",
    participants: "5",
    time: "2nd Jan 2023",
  },
];

export default function Puzzles() {
  const [puzzles, setPuzzles] = React.useState([]);

  useEffect(() => {
    const getPuzzles = async () => {
      const data = await axios.get("/api/fetchAllPuzzles");
      setPuzzles(data.data.data);
    };
    getPuzzles();
  }, []);

  return (
    <div className="w-full h-full my-5 overflow-y-scroll">
      <h1 className="text-4xl my-4 font-semibold text-center uppercase">
        Puzzles
      </h1>
      <div className=" my-10 space-y-8">
        {puzzles.length === 0 ? (
          <div className="min-h-[60vh] w-full flex justify-center items-center">
            <h2 className="text-xl font-semibold">No Puzzle created</h2>
          </div>
        ) : (
          puzzles.map((puzzle: any) => (
            <PuzzleCard
              desc={puzzle?.description}
              pieces={puzzle?.pieces.length}
              price={puzzle?.price}
              sponsorImg="/injective-logo.png"
              time={puzzle?.endDate}
              img={puzzle?.img}
              title={puzzle?.title}
              participants={puzzle?.users.length}
              key={puzzle?.img}
              user={puzzle?.users}
              id={puzzle?.id}
            />
          ))
        )}
      </div>
      <Footer className="" />
    </div>
  );
}
