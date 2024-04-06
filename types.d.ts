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
  datetime: string;
}

export interface comment {
  id: string;
  id_new: string;
  author: string;
}