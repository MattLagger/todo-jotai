import React, { Component } from "react";
import { ITodo } from "../interfaces/Todo.interfaces";

const TodoItem: React.FC<{ todo: ITodo }> = ({ todo }) => {
  return (
    <div className="flex mb-4 items-center">
      <p
        className={`w-full ${
          !todo.done ? "line-through text-green" : "text-grey-darkest"
        }`}
      >
        {todo.title}
      </p>
      <button
        className={`flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green ${
          todo.done
            ? "text-grey border-grey hover:bg-grey"
            : "border-green hover:bg-green"
        }`}
      >
        {todo.done ? "Done" : "Not Done"}
      </button>
      <button className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red">
        Remove
      </button>
    </div>
  );
};

export default TodoItem;
