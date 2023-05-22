import React from "react";
type TodoListProps = {
  task: string;
  deadline: number;
};

const TodoList = (props: TodoListProps) => {
  return (
    <>
      <p>{props.task}</p>
      <p>{props.deadline}</p>
      <button className="border rounded-md border-black p-2 mt-4 hover:bg-red-400">
        Delete
      </button>
    </>
  );
};

export default TodoList;
