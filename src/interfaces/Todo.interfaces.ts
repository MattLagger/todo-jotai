export interface ITodo {
  id?: number;
  title: string;
  done?: boolean;
}

export type INewTodo = Omit<ITodo, "id">;
