import {
  CustomSession,
  authOptions,
} from "@/app/api/auth/[...nextauth]/options";
import UserAvatar from "@/components/common/UserAvatar";
import { getServerSession } from "next-auth";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getUserComments, getUserPosts } from "@/lib/serverMethods";
import PostCard from "@/components/common/PostCard";
import DynamicNav from "@/components/common/DynamicNav";
import CommentCard from "@/components/common/CommentCard";

const Profile = async () => {
  const session: CustomSession | null = await getServerSession(authOptions);
  const posts: Array<PostType> | [] = await getUserPosts();
  const comments: Array<CommentType> | [] = await getUserComments();
  return (
    <div>
      <DynamicNav title="Profile" />
      <div className="mt-5 flex items-center space-x-4">
        <UserAvatar
          name={session?.user?.name!}
          image=""
          style="h-20 w-20"
          textStyle="font-bold capitalize"
        />
        <div className="">
          <h1 className="text-2xl font-bold">{session?.user?.name}</h1>
          <p className="text-md text-orange-400">{session?.user?.username}</p>
          <h1 className="text-xl">{session?.user?.email}</h1>
        </div>
      </div>
      <div className="mt-7">
        <Tabs defaultValue="post" className="w-full">
          <TabsList className="w-full">
            <TabsTrigger value="post" className="w-full">
              Posts
            </TabsTrigger>
            <TabsTrigger value="comments" className="w-full">
              Comments
            </TabsTrigger>
          </TabsList>
          <TabsContent value="post">
            {posts?.length < 1 && (
              <h1 className="text-center font-bold text-xl mt-5">
                No Post Found
              </h1>
            )}
            {posts?.length > 0 &&
              posts?.map((item) => (
                <PostCard key={item.id} post={item} isProfile={true} />
              ))}
          </TabsContent>
          <TabsContent value="comments">
            {comments?.length < 1 && (
              <h1 className="text-center font-bold text-xl mt-5">
                No Comments Found
              </h1>
            )}
            {comments?.length > 0 &&
              comments?.map((item) => (
                <CommentCard key={item.id} comment={item} />
              ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};
export default Profile;
