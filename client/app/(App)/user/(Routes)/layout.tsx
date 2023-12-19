import Navbar from "@/app/_components/Navbar/Navbar";
import UserDashBoard from "@/app/_components/Navbar/UserDashboard";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex justify-between mx-auto w-screen max-w-screen-2xl max-h-screen py-2 px-4  md:px-6 lg:py-4 space-x-2 overflow-hidden ">
      <div className="w-[18vw]">
        <UserDashBoard />
      </div>
      <div className="w-[82vw] relative pb-20 px-4">
        <Navbar className="" />
        {children}
      </div>
    </div>
  );
}
