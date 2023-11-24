"use client";
import UserAvatar from "../common/UserAvatar";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useRef, useState } from "react";
import { Image } from "lucide-react";
import ImagePreviewCard from "../common/ImagePreviewCard";
import axios from "axios";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

const AddThreads = () => {
  const { toast } = useToast();
  const router = useRouter();
  const imgRef = useRef<HTMLInputElement | null>(null);
  const [image, setImage] = useState<File | null>(null);
  const [content, setContent] = useState<string>("");
  const [previewUrl, setPreviewUrl] = useState<string | null>();
  const [loading, setLoading] = useState<boolean | null>(false);
  const [errors, setErrors] = useState<PostErrorType>();
  const onImgClick = () => {
    imgRef.current?.click();
  };

  const submit = () => {
    setLoading(true);
    const formData = new FormData();
    formData.append("content", content);
    if (image) {
      formData.append("image", image);
    }
    axios
      .post("/api/post", formData)
      .then((res) => {
        setLoading(false);
        const response = res.data;
        console.log(response.status);
        if (response.status === 400) {
          setErrors(response.errors);
        } else if (response.status === 200) {
          setErrors({});
          setContent("");
          setImage(null);
          setPreviewUrl(null);
          setLoading(false);

          toast({
            title: "Success",
            description: response.message,
            className: "bg-green-500",
          });
        }
      })
      .catch((error) => {
        setLoading(false);
        console.log("There is some error", error);
      });
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
          value={content}
        ></textarea>
      </div>
      <span className="text-red-400 font-bol ml-14">{errors?.content}</span>
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
        <Button
          size="sm"
          disabled={!content || loading ? true : false}
          onClick={submit}
        >
          Post
        </Button>
      </div>
    </div>
  );
};
export default AddThreads;
