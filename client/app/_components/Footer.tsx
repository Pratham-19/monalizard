import Link from "next/link";
import { cn } from "../_lib/utils";
import Image from "next/image";

const Footer = ({ className }: { className?: string }) => {
  const socails: {
    img: string;
    link: string;
  }[] = [
    {
      img: "/twitter.svg",
      link: "https://x.com",
    },
    {
      img: "/telegram.svg",
      link: "https://telegram.com",
    },
  ];
  return (
    <footer
      className={cn(
        "w-full bg-[hsl(var(--primary))] flex justify-between items-center h-12 rounded-[var(--radius)] px-3 py-5",
        className
      )}
    >
      <div className="flex">
        <Image
          src="/injective.png"
          alt="footer-logo"
          width={1600}
          height={1600}
          className="p-1.5 w-10 h-10 bg-white rounded-full mr-2"
        />
        <h2 className="font-bold my-auto text-base">
          Proudly made by Lizard People for Illumniate Hackathon
        </h2>
      </div>
      <div className="flex">
        {socails.map((social) => (
          <Link href={social.link} key={social.link}>
            <Image src={social.img} alt={social.link} width={40} height={40} />
          </Link>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
