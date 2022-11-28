import axios from "axios";
import { atom } from "jotai";
import { ITodo, INewTodo } from "../interfaces/Todo.interfaces";

export const newTodo = atom<INewTodo>({
  title: "",
  done: false,
});

export const readWriteNewTodo = atom(
  (get) => get(newTodo),
  (_get, set, todoValue: INewTodo) => {
    set(newTodo, todoValue);
  }
);

export const allTodos = atom<ITodo[]>([]);

export const postTodo = atom(null, async (get, set) => {
  const todo = get(newTodo);
  if (!todo) return;
  const { data } = await axios.post("http://localhost:3000/todos", todo);
  set(allTodos, [...get(allTodos), data]);
});

export const fetchTodos = atom(
  (get) => get(allTodos),
  async (_get, set) => {
    const { data } = await axios.get("http://localhost:3000/todos");
    set(allTodos, data);
  }
);
