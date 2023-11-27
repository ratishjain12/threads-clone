"use client";
import { Bell, Home, Search, User2 } from "lucide-react";
import Link from "next/link";

import { usePathname } from "next/navigation";
import { ThemeToggleBtn } from "./ThemeToggleBtn";
import { Button } from "../ui/button";
import SignOutBtn from "./SignOutBtn";
const SidebarLinks = () => {
  const pathName = usePathname();
  return (
    <ul className="mt-10">
      <li>
        <Link
          href="/"
          className={`flex gap-2 items-center justify-start hover:font-bold ${
            pathName == "/" ? "font-bold" : ""
          } `}
        >
          <Home height={25} width={25} />
          <h3 className="text-lg lg:text-xl">Home</h3>
        </Link>
      </li>
      <li>
        <Link
          href="/explore"
          className={`flex gap-2 items-center justify-start mt-4 hover:font-bold ${
            pathName == "/explore" ? "font-bold" : ""
          } `}
        >
          <Search height={25} width={25} />
          <h3 className="text-lg lg:text-xl">Explore</h3>
        </Link>
      </li>
      <li>
        <Link
          href="/notifications"
          className={`flex gap-2 items-center justify-start mt-4 hover:font-bold ${
            pathName == "/notifications" ? "font-bold" : ""
          } `}
        >
          <Bell height={25} width={25} />
          <h3 className="text-lg lg:text-xl">Notifications</h3>
        </Link>
      </li>
      <li>
        <Link
          href="/profile"
          className={`flex gap-2 items-center justify-start mt-4 hover:font-bold ${
            pathName == "/profile" ? "font-bold" : ""
          } `}
        >
          <User2 height={25} width={25} />
          <h3 className="text-lg lg:text-xl">Profile</h3>
        </Link>
      </li>
      <li>
        <div className="flex gap-2 items-center justify-start absolute bottom-14">
          <SignOutBtn />
          <ThemeToggleBtn />
        </div>
      </li>
    </ul>
  );
};
export default SidebarLinks;
