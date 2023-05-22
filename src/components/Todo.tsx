import React, { ChangeEvent, useState } from "react";
import TodoList from "./TodoList";

interface TodoData {
  task: string;
  deadline: number;
}

const Todo = () => {
  const [task, setTask] = useState("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<TodoData[]>([]);

  const taskHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  };

  const deadlineHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setDeadline(Number(event.target.value));
  };

  const addTask = (): void => {
    const data = { task, deadline };
    setTodoList([...todoList, data]);
    setTask("");
    setDeadline(0);
  };

  return (
    <div className="container mx-auto p-4 bg-purple-200 text-center">
      <label htmlFor="task" className="block font-bold mb-2">Task</label>
      <input
        className="border border-black p-2 mb-2"
        onChange={taskHandler}
        name="task"
        value={task}
        placeholder="Task.."
      />
      <br />
      <label htmlFor="deadline" className="block font-bold mb-2">Deadline</label>
      <input
        name="Deadline"
        value={deadline}
        onChange={deadlineHandler}
        className="border border-black p-2 mb-2"
        placeholder="Deadline.."
      />
      <br />
      <button
        className="border rounded-md border-black p-2 mt-4 hover:bg-purple-400"
        type="submit"
        onClick={addTask}
      >
        Add Task
      </button>
      <div className="mt-4 text-center">
        <p className="font-bold">Todo List</p>
        {todoList.map((taskData: TodoData, key: number) => (
          <div key={key} className="bg-white rounded-md p-2 my-2">
            <TodoList task={taskData.task} deadline={taskData.deadline}  />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
