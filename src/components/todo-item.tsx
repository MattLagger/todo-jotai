import { useSetAtom } from "jotai";
import React, { Component } from "react";
import { deleteTodo } from "../atoms/todos.atom";
import { ITodo } from "../interfaces/Todo.interfaces";

const TodoItem: React.FC<{ todo: ITodo }> = ({ todo }) => {
  const excludeTodo = useSetAtom(deleteTodo);

  return (
    <div className="flex mb-4 items-center">
      <p
        className={`w-full ${
          todo.done ? "line-through text-green" : "text-grey-darkest"
        }`}
      >
        {todo.title}
      </p>
      <button
        className={`flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white  text-green-500 ${
          todo.done
            ? "text-gray-500 border-gray-500 hover:bg-gray-200"
            : "border-green-500 hover:bg-green-500"
        }`}
      >
        {todo.done ? "Done" : "Not Done"}
      </button>
      <button
        className="flex-no-shrink p-2 ml-2 border-2 rounded text-red-500 border-red-500 hover:text-white hover:bg-red-200"
        onClick={() => excludeTodo(todo.id)}
      >
        Remove
      </button>
    </div>
  );
};

export default TodoItem;
