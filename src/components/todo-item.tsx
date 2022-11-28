import React, { Component } from "react";
import { ITodo } from "../interfaces/Todo.interfaces";

const TodoItem: React.FC<{ todo: ITodo }> = ({ todo }) => {
  return (
    <div className="flex" key={todo.id}>
      <p>{todo.title}</p>
      <input type="checkbox" checked={todo.done} />
    </div>
  );
};

export default TodoItem;
