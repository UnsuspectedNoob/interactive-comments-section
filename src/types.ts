export interface User {
  image: {
    png: string;
    webp: string;
  };
  username: string;
}

export type CommentInfo = {
  content: string;
  createdAt: string;
  id: number;
  replies: Reply[];
  score: number;
  user: User;
};

export interface Reply {
  content: string;
  createdAt: string;
  id: number;
  replyingTo: string;
  score: number;
  user: User;
}

export type CurrentUser = {
  currentUser: User;
  comments: CommentInfo[];
};
