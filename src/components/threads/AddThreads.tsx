"use client";
import UserAvatar from "../common/UserAvatar";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useRef, useState } from "react";
import { Image } from "lucide-react";
import ImagePreviewCard from "../common/ImagePreviewCard";

const AddThreads = () => {
  const imgRef = useRef<HTMLInputElement | null>(null);
  const [image, setImage] = useState<File | null>(null);
  const [content, setContent] = useState<string | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>();
  const onImgClick = () => {
    imgRef.current?.click();
  };

  const handleImgChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setImage(selectedFile);
      const imgUrl = URL.createObjectURL(selectedFile);
      setPreviewUrl(imgUrl);
    }
  };
  const handleCloseIcon = () => {
    setImage(null);
    setPreviewUrl(null);
  };
  return (
    <div className="mt-4">
      {previewUrl ? (
        <ImagePreviewCard image={previewUrl} Callback={handleCloseIcon} />
      ) : (
        <></>
      )}
      <div className="flex justify-start items-center space-x-4">
        <UserAvatar name="Ratish" image="" />
        <textarea
          className="w-full h-24 text-md p-2 bg-muted outline-none resize-none rounded-lg placeholder:font-normal"
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
      </div>
      <div className="mt-2 ml-14 flex justify-between items-center">
        <Input
          type="file"
          ref={imgRef}
          className="hidden"
          onChange={handleImgChange}
        />
        <Image
          height={20}
          width={20}
          className="cursor-pointer"
          onClick={onImgClick}
        />
        <Button size="sm" disabled={!content}>
          Post
        </Button>
      </div>
    </div>
  );
};
export default AddThreads;
