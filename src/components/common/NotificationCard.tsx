import { formatDate } from "@/lib/utils";
import UserAvatar from "./UserAvatar";

const NotificationCard = ({ notif }: { notif: NotificactionType }) => {
  return (
    <div className="mb-3">
      <div className="flex items-start space-x-4">
        <UserAvatar name={notif.user.name} image="" />
        <div className="bg-muted w-full rounded-lg p-2">
          <div className="flex justify-between items-start w-full">
            <p className="font-bold">{notif.user.name}</p>
            <div className="flex gap-1">
              <span>{formatDate(notif.created_at)}</span>
            </div>
          </div>
          <div>{notif.content}</div>
        </div>
      </div>
    </div>
  );
};
export default NotificationCard;
