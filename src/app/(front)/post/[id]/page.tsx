import CommentCard from "@/components/common/CommentCard";
import DynamicNav from "@/components/common/DynamicNav";
import PostCard from "@/components/common/PostCard";
import { getPost } from "@/lib/serverMethods";

const Post = async ({ params }: { params: { id: number } }) => {
  const post = await getPost(params.id);
  return (
    <div>
      <DynamicNav title="Show Post" />
      {post && (
        <div className="mt-5">
          <PostCard post={post} noRedirect={true} />
        </div>
      )}
      <div className="mt-5">
        <h1 className="font-bold text-lg mb-5">Comments</h1>
        {post.comment.length > 0 ? (
          <div>
            {post.comment.map((item: CommentType) => {
              return (
                <div>
                  <CommentCard comment={item} key={item.id} />
                </div>
              );
            })}
          </div>
        ) : (
          <div>
            <h1 className="font-bold">No Comment Found</h1>
          </div>
        )}
      </div>
    </div>
  );
};
export default Post;
