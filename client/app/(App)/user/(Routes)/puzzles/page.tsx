import PuzzleCard from "@/app/_components/Card/PuzzleCard";
import Footer from "@/app/_components/Footer";
import React from "react";

const puzzles: {
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
    sponsorImg: "/gnoisis.jpg",
    pieces: "15",
    price: "1500",
    title: "LA Tree",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere obcaecati facilis a consequatur, repudiandae voluptates! Quisquam, voluptatum. Quisquam, voluptatum.",
    participants: "5",
    time: "2nd Jan 2023",
  },
];

export default function Puzzles() {
  return (
    <div className="w-full h-full my-5 overflow-y-scroll">
      <h1 className="text-4xl my-4 font-semibold text-center uppercase">
        Puzzles
      </h1>
      <div className=" my-10 space-y-8">
        {puzzles.map((puzzle) => (
          <PuzzleCard {...puzzle} key={puzzle.img} />
        ))}
      </div>
      <Footer className="" />
    </div>
  );
}
