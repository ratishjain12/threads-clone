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
  user: UserType;
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
