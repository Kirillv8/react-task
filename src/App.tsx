import React, { useState } from "react";
import { useReducer } from "react";

import AddTask from "./Components/AddTask/AddTask";
import ListTask from "./Components/ListTasks/ListTask";

interface Task {
  id: number | string;
  text: string | number;
  done: boolean;
}

const App: React.FC<Task> = () => {
  // const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  const handleAddTask = (text: string) => {
    dispatch({
      type: "added",
      text: text,
    });
    // const newTask: Task = {
    //   id: tasks.length,
    //   text,
    //   done: false,
    // };
    // setTasks([...tasks, newTask]);
  };

  const handleChangeTask = (task: Task) => {
    dispatch({
      type: "changed",
      task: task,
    });
    // return setTasks(
    //   tasks.map((t) => {
    //     console.log(t.id);
    //     if (t.id === task.id) {
    //       return task;
    //     } else {
    //       return t;
    //     }
    //   })
    // );
  };

  const handleDeleteTask = (taskId: string | number) => {
    dispatch({
      type: "deleted",
      id: taskId,
    });
    // setTasks(tasks.filter((t) => t.id !== taskId));
  };

  return (
    <>
      <h1>Prague itinerary</h1>

      <AddTask handleAddTask={handleAddTask} tasks={tasks} />
      <ListTask
        tasks={tasks}
        handleChangeTask={handleChangeTask}
        handleDeleteTask={handleDeleteTask}
      />
    </>
  );
};

export default App;

const initialTasks = [
  { id: 0, text: "Visit Kafka Museum", done: true },
  { id: 1, text: "Watch a puppet show", done: false },
  { id: 2, text: "Lennon Wall pic", done: false },
];

const tasksReducer = (tasks: any, action: any) => {
  switch (action.type) {
    case "added": {
      return [
        ...tasks,
        {
          id: tasks.length,
          text: action.text,
          done: false,
        },
      ];
    }
    case "changed": {
      return tasks.map((t: any) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case "deleted": {
      return tasks.filter((t: any) => t.id !== action.id);
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
};
