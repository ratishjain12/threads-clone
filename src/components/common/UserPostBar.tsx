"use client";
import { MoreHorizontal } from "lucide-react";
import UserAvatar from "./UserAvatar";
import { formatDate } from "@/lib/utils";

import DeletePostBtn from "../threads/DeletePostBtn";
const UserPostBar = ({
  post,
  isProfile,
}: {
  post: PostType;
  isProfile?: boolean;
}) => {
  return (
    <div className="flex space-x-4 ">
      <UserAvatar name={post.user.name} image="" />
      <div className=" flex justify-between w-full items-start ">
        <strong>Ratish</strong>
        <div className="flex items-center">
          <span className="text-xs mr-2">{formatDate(post.created_at)}</span>
          {isProfile ? (
            <DeletePostBtn post={post} />
          ) : (
            <MoreHorizontal height={22} width={22} className="cursor-pointer" />
          )}
        </div>
      </div>
    </div>
  );
};
export default UserPostBar;
