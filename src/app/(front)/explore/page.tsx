import DynamicNav from "@/components/common/DynamicNav";
import UserListCard from "@/components/common/UserListCard";
import ExploreSearchBar from "@/components/explore/ExploreSearchBar";
import { exploreUsers } from "@/lib/serverMethods";

const Explore = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {
  const users: Array<UserType> | [] = await exploreUsers(searchParams?.query!);
  return (
    <div>
      <DynamicNav title="Explore" />
      <ExploreSearchBar />
      <div className="mt-5">
        {users &&
          users.length > 0 &&
          users.map((item) => <UserListCard user={item} key={item.id} />)}

        {users && users.length < 1 && searchParams?.query?.length! > 1 && (
          <h1 className="text-xl font-bold text-center mt-2">No user found</h1>
        )}
      </div>
    </div>
  );
};
export default Explore;
