"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useMemo, useState } from "react";
import { useAccount } from "wagmi";
import { getInjectiveAddress } from "@injectivelabs/sdk-ts";
import Avatar from "boring-avatars";

const PromoterDashBoard = () => {
  const pathname = usePathname();
  const [showDashboard, setShowDashboard] = useState(true);
  const [showCreate, setShowCreate] = useState(false);
  const [showQuest, setShowQuest] = useState(false);
  const { address } = useAccount();

  const menu: {
    name: string;
    icon: string;
    link: string;
    isActive: boolean;
  }[] = useMemo(
    () => [
      {
        name: "Dashboard",
        icon: "/dashboard.svg",
        link: "/promoter/dashboard",
        isActive: showDashboard,
      },
      {
        name: "Create Puzzle",
        icon: "/create.svg",
        link: "/promoter/create",
        isActive: showCreate,
      },
      {
        name: "Add Quest",
        icon: "/quest-nav.svg",
        link: "/promoter/quest",
        isActive: showQuest,
      },
    ],
    [showDashboard, showCreate, showQuest]
  );

  useEffect(() => {
    const getPath = menu.find((item) => item.link === pathname);
    if (!getPath) return;
    switch (getPath.name) {
      case "Dashboard":
        setShowDashboard(true);
        setShowCreate(false);
        setShowQuest(false);
        break;
      case "Create Puzzle":
        setShowDashboard(false);
        setShowQuest(false);
        setShowCreate(true);
        break;
      case "Add Quest":
        setShowDashboard(false);
        setShowQuest(true);
        setShowCreate(false);
        break;
      default:
        setShowDashboard(true);
        setShowQuest(false);
        setShowCreate(false);
    }
  }, [pathname, menu]);
  return (
    <div className="bg-[hsl(var(--primary))] w-full h-[calc(100vh-1rem)]  lg:h-[calc(100vh-2rem)] rounded-2xl overflow-hidden">
      <div className="h-[32%] relative">
        <Image
          src="/sponsor-lizard.jpg"
          alt="promoter"
          width={1024}
          height={1024}
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-x-0 bottom-4 flex justify-center items-center bg-black rounded-xl w-[80%] mx-auto text-white space-x-2 py-2 opacity-80">
          <Image
            src="/tick.svg"
            alt="user"
            width={40}
            height={40}
            className="w-5 h-5"
          />
          <h2>Promoter</h2>
        </div>
        <div className="absolute top-0 left-0 w-full h-full z-10 bg-[#fe8c27] opacity-[0.15] " />
      </div>
      <div className="h-[68%] px-3 flex flex-col justify-around">
        <section className="flex space-x-3 items-center bg-[hsl(var(--secondary))] p-4 rounded-xl mt-4 ">
          <Avatar
            size={40}
            name={address ?? "pratham.lens"}
            variant="beam"
            colors={["#92A1C6", "#35147c", "#ff0808", "#C271B4", "#C20D90"]}
          />
          {address ? (
            <h2 className="text-xl truncate">
              {getInjectiveAddress(address as string)?.substring(0, 6)}...
              {getInjectiveAddress(address as string)?.substring(
                address!.length,
                address!.length - 3
              )}
            </h2>
          ) : (
            <h2 className="text-xl truncate">Pratham.inj</h2>
          )}
        </section>
        <section>
          {menu.map((item) => (
            <Link
              href={item.link}
              className={`flex items-center space-x-2 my-4 justify-start text-center pl-4 ${
                item.isActive ? "border-l-4 " : ""
              } cursor-pointer hover:scale-[1.03] transition-transform duration-300`}
              key={item.name}
            >
              <Image
                src={item.icon}
                alt={item.name}
                width={40}
                height={40}
                className="w-6 h-6"
              />
              <h2>{item.name}</h2>
            </Link>
          ))}
        </section>
        <section className="w-full flex flex-col items-center  mx-auto rounded-xl text-center pt-3 pb-7 h-[48%]" />
      </div>
    </div>
  );
};
export default PromoterDashBoard;
