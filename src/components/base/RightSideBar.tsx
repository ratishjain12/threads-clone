import { getUsers } from "@/lib/serverMethods";
import UserListCard from "../common/UserListCard";
import { ScrollArea } from "../ui/scroll-area";

const RightSideBar = async () => {
  const users: Array<UserType> | [] = await getUsers();
  return (
    <ScrollArea className="max-h-screen lg:w-1/4 lg:pt-5 lg:px-2 xl:p-5 hidden lg:block">
      <div className="border-l-2">
        <h1 className="text-2xl font-bold mb-5 pl-6">Suggestion for you</h1>
        {users && users.length < 1 && (
          <h1 className="text-lg font-bold ">No Suggestions Found</h1>
        )}
        {users.map((item) => {
          return <UserListCard key={item.id} user={item} />;
        })}
      </div>
    </ScrollArea>
  );
};
export default RightSideBar;
