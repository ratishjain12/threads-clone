import Link from "next/link";
import UserAvatar from "./UserAvatar";
import { Button } from "../ui/button";

const UserListCard = () => {
  return (
    <div className="w-full shadow-sm p-4 rounded-md mb-3">
      <div className="flex">
        <UserAvatar name="Ratish" image="" />
        <div className="flex justify-between items-start w-full">
          <div className="flex flex-col">
            <strong className="text-md font-bold ml-2">Ratish</strong>
            <span className="text-xs ml-2 font-light">@Ratish</span>
          </div>
          <Link href="#">
            <Button>View</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default UserListCard;
