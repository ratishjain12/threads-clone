"use client";

import { Heart } from "lucide-react";
import { useState } from "react";
import axios from "axios";
import { useToast } from "../ui/use-toast";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { CustomSession } from "@/app/api/auth/[...nextauth]/options";
const LikePost = ({ post }: { post: PostType }) => {
  const [status, setStatus] = useState("");

  const router = useRouter();
  const { data } = useSession();
  const userdata = data as CustomSession;
  const { toast } = useToast();
  const PostLike = (status: string) => {
    setStatus(status);
    axios
      .post("/api/like", {
        post_id: post.id,
        toUser_id: post.user_id,
        status: status,
      })
      .then((res) => {
        const response = res.data;
        if (response.status === 200) {
          toast({
            title: "Success!!",
            description: response.message,
            className: "bg-green-500",
          });
          router.refresh();
        } else if (response.status === 400) {
          toast({
            title: "Failure!!",
            description: response.message,
            className: "bg-red-500",
          });
          router.refresh();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      {post.likes.find(
        (item: { user_id: string }) => item.user_id == userdata?.user?.id
      ) || status == "1" ? (
        <Heart
          width={20}
          height={20}
          fill="red"
          strokeWidth={0}
          className="cursor-pointer "
          onClick={() => PostLike("0")}
        />
      ) : (
        <Heart
          width={20}
          height={20}
          className="cursor-pointer"
          onClick={() => PostLike("1")}
        />
      )}
    </div>
  );
};
export default LikePost;
