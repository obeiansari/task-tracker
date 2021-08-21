import React from "react";
import { TodoItem } from "./TodoItem";

export const Todos = (props) => {
  return (
    <div className="container">
      <h3 className="text-center my-3">Todos List</h3>
      {props.todos.length === 0
        ? "No Todos Remaining"
        : props.todos.map((todo) => {
            return (
              <TodoItem key={todo.sno} todo={todo} onDelete={props.onDelete} />
            );
          })}
    </div>
  );
};
