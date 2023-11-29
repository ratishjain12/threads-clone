"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon, User2 } from "lucide-react";
import Image from "next/image";
import SidebarLinks from "../common/SidebarLinks";
import Link from "next/link";
import { ThemeToggleBtn } from "../common/ThemeToggleBtn";

const MobileNav = () => {
  return (
    <nav className="md:hidden flex justify-between place-items-center sticky top-0 bg-background z-50 shadow-sm ">
      <div className="flex items-center">
        <Sheet>
          <SheetTrigger>
            <MenuIcon className="font-bold" width={30} height={30} />
          </SheetTrigger>
          <SheetContent side={"left"}>
            <SheetHeader>
              <SheetTitle className="flex items-center space-x-2">
                <Image
                  src="/images/logo.svg"
                  width={50}
                  height={50}
                  alt="logo"
                />
                <span>Threads</span>
              </SheetTitle>
            </SheetHeader>
            <SheetDescription>
              <SidebarLinks />
            </SheetDescription>
          </SheetContent>
        </Sheet>
      </div>
      <Image src="/images/logo.svg" width={25} height={25} alt="logo" />
      <Link href="/profile">
        <User2 width={25} height={25} />
      </Link>
    </nav>
  );
};
export default MobileNav;
