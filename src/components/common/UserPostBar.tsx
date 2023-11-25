import { MoreHorizontal } from "lucide-react";
import UserAvatar from "./UserAvatar";
import { formatDate } from "@/lib/utils";

const UserPostBar = ({ post }: { post: PostType }) => {
  return (
    <div className="flex space-x-4 ">
      <UserAvatar name={post.user.name} image="" />
      <div className=" flex justify-between w-full items-start ">
        <strong>Ratish</strong>
        <div className="flex items-center">
          <span className="text-xs mr-2">{formatDate(post.created_at)}</span>
          <MoreHorizontal />
        </div>
      </div>
    </div>
  );
};
export default UserPostBar;
