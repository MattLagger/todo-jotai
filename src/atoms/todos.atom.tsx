import axios from "axios";
import { atom } from "jotai";
import { atomWithReset, RESET } from "jotai/utils";
import { ITodo, INewTodo } from "../interfaces/Todo.interfaces";

export const newTodo = atomWithReset<INewTodo>({
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
  set(newTodo, RESET);
});

export const fetchTodos = atom(
  (get) => get(allTodos),
  async (_get, set) => {
    const { data } = await axios.get("http://localhost:3000/todos");
    set(allTodos, data);
  }
);

export const toggleDoneTodo = atom(null, async (get, set, todo: ITodo) => {
  const newTodo = {
    ...todo,
    done: !todo.done,
  };

  const { data } = await axios.post(`http://localhost:3000/todos/${todo.id}`);
  const todos = get(allTodos).map((t) => {
    if (t.id === todo.id) {
      todo = newTodo;
    }
    return todo;
  });
  set(allTodos, todos);
});

export const deleteTodo = atom(null, async (get, set, todoId: number) => {
  const { data } = await axios.delete(`http://localhost:3000/todos/${todoId}`);
  const todos = get(allTodos).filter((todo) => todo.id !== todoId);
  set(allTodos, todos);
});
