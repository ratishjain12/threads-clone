import PostCard from "@/components/common/PostCard";
import AddThreads from "@/components/threads/AddThreads";
import { getPosts } from "@/lib/serverMethods";
import Image from "next/image";

export default async function Home() {
  const posts: Array<PostType> | [] = await getPosts();

  return (
    <div>
      <div className="flex justify-center">
        <Image
          src="/images/logo.svg"
          width={50}
          height={50}
          alt="logo"
          className="hidden md:block"
        />
      </div>
      <AddThreads />
      <div>
        {posts?.map((post) => {
          return <PostCard post={post} key={post.id} />;
        })}
      </div>
    </div>
  );
}
