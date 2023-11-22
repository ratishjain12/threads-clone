import LeftSideBar from "./LeftSideBar";
import MobileNav from "./MobileNav";
import RightSideBar from "./RightSideBar";

const BaseComponent = () => {
  return (
    <div className="md:container p-5">
      <div className="flex">
        <LeftSideBar />
        <div className="h-screen w-full lg:w-2/4 md:w-3/4 lg:px-8 lg:py-4 xl:px-12  md:p-6">
          <MobileNav />
          <h1>I am feed area</h1>
        </div>
        <RightSideBar />
      </div>
    </div>
  );
};
export default BaseComponent;
