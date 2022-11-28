import { useAtom, useSetAtom } from "jotai";
import React from "react";
import { newTodo, postTodo, readWriteNewTodo } from "../atoms/todos.atom";
import { ITodo } from "../interfaces/Todo.interfaces";

const TodoAdd = () => {
  const [todo, setNewTodo] = useAtom(readWriteNewTodo);

  const saveTodo = useSetAtom(postTodo);
  return (
    <div className="flex">
      <input
        onChange={(e) => setNewTodo({ ...todo, title: e.target.value })}
        type="text"
      />
      <button onClick={() => saveTodo()}>Add</button>
    </div>
  );
};

export default TodoAdd;
