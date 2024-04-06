export interface New {
  id: string;
  title: string;
  content: string;
  img: string;
  datetime: string;
}

export interface NewMutation {
  title: string;
  content: string;
  img: string;
}

export interface Comment {
  id: string;
  news_id: string;
  author: string;
  text: string;
}

export interface CommentMutation {
  news_id: string;
  author: string;
  text: string;
}