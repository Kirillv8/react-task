interface Task {
  id: number | string;
  text: string | number;
  done: boolean;
}

interface PropForList {
  tasks: Array<{
    id: number | string;
    text: string | number;
    done: boolean;
  }>;

  handleChangeTask: (task: Task) => void;
  handleDeleteTask: (taskId: string | number) => void;
}

const ListTask: React.FC<PropForList> = ({
  tasks,
  handleChangeTask,
  handleDeleteTask,
}) => {
  return (
    <>
      {tasks.map((task) => (
        <div key={task.id}>
          <input
            type="checkbox"
            checked={task.done}
            onChange={() => handleChangeTask(task)}
          />
          <label>{task.text}</label>
          <button onClick={() => handleChangeTask(task)}>Edit</button>
          <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
        </div>
      ))}
    </>
  );
};

export default ListTask;
