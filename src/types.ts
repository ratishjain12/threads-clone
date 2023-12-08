type AuthStateType = {
  email?: string;
  name?: string;
  username?: string;
  password?: string;
  password_confirmation?: string;
};

type AuthErrorType = {
  email?: string;
  name?: string;
  username?: string;
  password?: string;
};

type PostErrorType = {
  content?: string;
};

type PostType = {
  id: number;
  user_id: number;
  content: string;
  image?: string;
  created_at: string;
  comment_count?: number;
  likes_count?: number;
  likes: Array<likeUsers>;
  user: UserType;
};

type likeUsers = {
  user_id: string;
};

type UserType = {
  id: number;
  name: string;
  username: string;
};

type CommentType = {
  id: number;
  user_id: number;
  post_id: number;
  content: string;
  created_at: string;
  user: UserType;
};

type ShowUserType = {
  id: number;
  name: string;
  username: string;
  email: string;
  post: Array<PostType> | [];
  comment: Array<CommentType> | [];
};

type NotificactionType = {
  id: number;
  user_id: number;
  content: string;
  toUser_id: number;
  created_at: string;
  user: UserType;
};

type LikeType = {
  status?: string;
  toUser_id?: string;
  post_id?: string;
};
