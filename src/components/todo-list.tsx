import { useAtom } from "jotai";
import React, { useEffect } from "react";
import { fetchTodos } from "../atoms/todos.atom";
import TodoItem from "./todo-item";

const TodoList = () => {
  const [todos, setTodos] = useAtom(fetchTodos);

  useEffect(() => {
    setTodos();
  }, []);

  return (
    <div className="flexbox">
      {todos.map((todo) => (
        <TodoItem todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
