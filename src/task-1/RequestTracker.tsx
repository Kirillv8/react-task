import React, { useState } from "react";
const RequestTracker = () => {
  const [pending, setPending] = useState(0);
  const [completed, setCompeled] = useState(0);
  console.log("1. Рендер компонента. Текущий pending:", pending);
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("2. Клик! Увеличиваю pending...");
    function changeStatusBuy() {
      setPending((prev) => prev + 1);
      setTimeout(() => {
        console.log("3. Прошло 3 секунды, уменьшаю pending...");
        console.log(
          "3. Прошло 3 секунды, увеличиваю complered - ..." + ` ${completed}`
        );
        function statusBuy() {
          setPending((prev) => prev - 1);
          setCompeled((prev) => prev + 1);
        }
        statusBuy();
      }, 3000);
    }
    changeStatusBuy();
  };
  return (
    <>
      <h2>Pending: {pending}</h2>
      <h2>Compeled: {completed}</h2>
      <button type="button" onClick={(e) => handleClick(e)}>
        Buy
      </button>
    </>
  );
};

export default RequestTracker;
