import { formatDate } from "@/lib/utils";
import UserAvatar from "./UserAvatar";
import DeleteComment from "../threads/DeleteComment";
import {
  CustomSession,
  authOptions,
} from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";

const CommentCard = async ({ comment }: { comment: CommentType }) => {
  const session: CustomSession | null = await getServerSession(authOptions);
  return (
    <div className="mb-3">
      <div className="flex items-start space-x-4">
        <UserAvatar name={comment.user.name} image="" />
        <div className="bg-muted w-full rounded-lg p-2">
          <div className="flex justify-between items-start w-full">
            <p className="font-bold">{comment.user.name}</p>
            <div className="flex gap-1">
              <span>{formatDate(comment.created_at)}</span>
              {session?.user?.id === comment.user_id.toString() ? (
                <DeleteComment comment={comment} />
              ) : (
                <></>
              )}
            </div>
          </div>
          <div>{comment.content}</div>
        </div>
      </div>
    </div>
  );
};
export default CommentCard;
