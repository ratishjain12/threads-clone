import Link from "next/link";
import UserAvatar from "./UserAvatar";
import { Button } from "../ui/button";

const UserListCard = ({ user }: { user: UserType }) => {
  return (
    <div className="w-full shadow-sm p-4 rounded-md mb-3">
      <div className="flex">
        <UserAvatar name={user.name.toUpperCase()} image="" />
        <div className="flex justify-between items-start w-full gap-[10px]">
          <div className="flex flex-col">
            <strong className="text-md font-bold ml-2">{user.name}</strong>
            <span className="text-xs ml-2 font-light">@{user.username}</span>
          </div>
          <Link href={`/user/${user.id}`}>
            <Button>View</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default UserListCard;
