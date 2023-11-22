"use client";
import { Bell, Home, Search, User2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SidebarLinks from "../common/SidebarLinks";
import { ThemeToggleBtn } from "../common/ThemeToggleBtn";
const LeftSideBar = () => {
  const pathName = usePathname();
  return (
    <div className="h-screen border-r-2 md:w-1/4 lg:p-10 md: pt-5 hidden md:block">
      <div className="flex justify-start items-center">
        <Image src="/images/logo.svg" width={50} height={50} alt="logo" />
        <span className="ml-2 text-xl font-bold">Threads</span>
      </div>
      <SidebarLinks />
    </div>
  );
};
export default LeftSideBar;
