export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
  isFav?: boolean;
}

export interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}
