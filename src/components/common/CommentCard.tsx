import { formatDate } from "@/lib/utils";
import UserAvatar from "./UserAvatar";

const CommentCard = ({ comment }: { comment: CommentType }) => {
  return (
    <div className="mb-3">
      <div className="flex items-start space-x-4">
        <UserAvatar name={comment.user.name} image="" />
        <div className="bg-muted w-full rounded-lg p-2">
          <div className="flex justify-between items-start w-full">
            <p className="font-bold">{comment.user.name}</p>
            <div className="flex">
              <span>{formatDate(comment.created_at)}</span>
            </div>
          </div>
          <div>{comment.content}</div>
        </div>
      </div>
    </div>
  );
};
export default CommentCard;
