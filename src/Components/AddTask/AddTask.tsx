import { useState } from "react";
interface AddTask {
  handleAddTask: (text: string) => void;
  tasks: Array<{
    id: number | string;
    text: string | number;
    done: boolean;
  }>;
}

const AddTask: React.FC<AddTask> = ({ handleAddTask, tasks }) => {
  const [text, setText] = useState("");
  return (
    <>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={() => handleAddTask(text)}>Add task</button>
    </>
  );
};

export default AddTask;
