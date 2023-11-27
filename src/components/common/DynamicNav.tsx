"use client";

import { MoveLeft } from "lucide-react";
import { useRouter } from "next/navigation";
const DynamicNav = ({ title }: { title: string }) => {
  const router = useRouter();
  return (
    <div className="w-full flex items-center space-x-2 md:space-x-8 mt-4">
      <MoveLeft
        size={25}
        className="cursor-pointer hidden md:block"
        onClick={router.back}
      />
      <h1 className="text-xl font-bold">{title}</h1>
    </div>
  );
};
export default DynamicNav;
