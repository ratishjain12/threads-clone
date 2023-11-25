import Image from "next/image";
import UserPostBar from "./UserPostBar";
import { Heart, MessageCircle, SendHorizonal } from "lucide-react";

const PostCard = ({ post }: { post: PostType }) => {
  return (
    <div className="relative my-3 border-b-2 border-muted mb-7">
      <UserPostBar post={post} />
      <div className="ml-12 mt-[-10px]">{post.content}</div>
      {post.image && (
        <div className="w-full h-[400px] relative mt-2">
          <Image
            src={`/uploads/${post.image}`}
            fill
            alt="postimage"
            className="rounded-md"
          />
        </div>
      )}

      <div className="mt-4 ">
        <div className="flex space-x-2">
          <Heart width={20} height={20} className="cursor-pointer" />
          <MessageCircle width={20} height={20} className="cursor-pointer" />
          <SendHorizonal width={20} height={20} className="cursor-pointer" />
        </div>
      </div>
      <div className="mt-2 ">
        <span>3 replies</span>
        <span className="ml-3">1 likes</span>
      </div>
    </div>
  );
};
export default PostCard;
