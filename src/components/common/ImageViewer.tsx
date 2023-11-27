"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Env from "@/config/env";
import Image from "next/image";
const ImageViewer = ({ image }: { image: string }) => {
  return (
    <Sheet>
      <SheetTrigger>
        <Image
          src={`${Env.APP_URL}/uploads/${image}`}
          fill
          alt="postimage"
          className="rounded-md"
        />
      </SheetTrigger>
      <SheetContent side={"bottom"} className="h-[500px]">
        <SheetHeader>
          <SheetTitle>Show Image</SheetTitle>
          <SheetDescription>
            <div className="w-full h-[400px] relative mt-2">
              <Image
                src={`${Env.APP_URL}/uploads/${image}`}
                fill
                alt="postimage"
                className="w-full mt-2 rounded-md object-contain"
                unoptimized
              />
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};
export default ImageViewer;
