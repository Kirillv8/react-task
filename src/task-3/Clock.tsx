import React, { useState, useEffect } from "react";

type clockProp = {
  color: string;
};

const Clock: React.FC<clockProp> = ({ color }) => {
  const [time, setTime] = useState("");
  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date().toLocaleString());
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return <h2 style={{ color: color }}>{time}</h2>;
};

const Select = () => {
  const [colors] = useState([
    { color: "lightcoral" },
    { color: "midnightblue" },
    { color: "rebeccapurple" },
  ]);
  const [currentColor, setCurrentColor] = useState("");

  const hadleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentColor(e.target.value);
  };

  return (
    <>
      {" "}
      <select onChange={(e) => hadleChange(e)}>
        {colors.map((color) => {
          return (
            <option key={color.color} value={color.color}>
              {color.color}
            </option>
          );
        })}
      </select>
      <Clock color={currentColor} />
    </>
  );
};

const Parents = () => {
  return (
    <>
      <Select />
    </>
  );
};

export default Parents;
