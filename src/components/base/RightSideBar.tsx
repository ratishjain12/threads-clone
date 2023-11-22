import UserListCard from "../common/UserListCard";

const RightSideBar = () => {
  return (
    <div className="h-screen border-l-2 lg:w-1/4 lg:pt-5 lg:px-2 xl:p-5 hidden lg:block">
      <h1 className="text-2xl font-bold mb-5">Suggestion for you</h1>
      <UserListCard />
    </div>
  );
};
export default RightSideBar;
