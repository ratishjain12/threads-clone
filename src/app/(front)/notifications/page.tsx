import DynamicNav from "@/components/common/DynamicNav";
import NotificationCard from "@/components/common/NotificationCard";
import UserAvatar from "@/components/common/UserAvatar";
import { getUserNotifs } from "@/lib/serverMethods";
import axios from "axios";

const Notifications = async () => {
  const notifs: Array<NotificactionType> | [] = await getUserNotifs();
  return (
    <div>
      <DynamicNav title="Notifications" />
      <div className="mt-6">
        {notifs.map((item) => {
          return <NotificationCard key={item.id} notif={item} />;
        })}
      </div>
    </div>
  );
};
export default Notifications;
