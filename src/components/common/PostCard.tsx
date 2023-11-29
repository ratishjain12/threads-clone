import UserPostBar from "./UserPostBar";
import { Heart, SendHorizonal } from "lucide-react";
import ImageViewer from "./ImageViewer";
import AddComment from "../threads/AddComment";
import Link from "next/link";

const PostCard = ({
  post,
  noRedirect,
}: {
  post: PostType;
  noRedirect?: boolean;
}) => {
  return (
    <div className="relative my-3 border-b-2 border-muted mb-7">
      <UserPostBar post={post} />
      <div className="ml-12 mt-[-10px]">
        <Link href={noRedirect === true ? `#` : `/post/${post.id}`}>
          {post.content}
        </Link>
      </div>
      {post.image && (
        <div className="w-full h-[400px] relative mt-2">
          <ImageViewer image={post.image} />
        </div>
      )}

      <div className="mt-4 ">
        <div className="flex space-x-2">
          <Heart width={20} height={20} className="cursor-pointer" />
          <AddComment post={post} />
          <SendHorizonal width={20} height={20} className="cursor-pointer" />
        </div>
      </div>
      <div className="mt-2 ">
        <span>{post.comment_count} replies</span>
        <span className="ml-3">1 likes</span>
      </div>
    </div>
  );
};
export default PostCard;
