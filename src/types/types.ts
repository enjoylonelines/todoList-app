export interface Todo {
  id: string;
  todo: string;
}

export type Callback = (callback: (prevLists: Todo[]) => Todo[]) => void;

