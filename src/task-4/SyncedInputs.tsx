import React, { useState } from "react";
type InputProps = {
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
const SyncedInputs = () => {
  const [text, setText] = useState("");
  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  return (
    <>
      <Input
        label={"first-label"}
        type={"text"}
        value={text}
        onChange={handleChangeValue}
      />
      <br></br>
      <Input
        label={"second-label"}
        type={"text"}
        value={text}
        onChange={handleChangeValue}
      />
    </>
  );
};

export default SyncedInputs;

const Input: React.FC<InputProps> = ({ label, type, value, onChange }) => {
  return (
    <>
      {label}
      <br></br> <input type={type} value={value} onChange={onChange}></input>
    </>
  );
};
