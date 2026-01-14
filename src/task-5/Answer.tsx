import { ChangeEvent, useState } from "react";

type PropAnswer = {
  showHint: boolean;
  setShowHint: (val: boolean) => void;
  text: string;
  handleChangeValue: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

type PropForm = {
  text: string;
  handleChangeValue: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

export default function ParentAnswer() {
  const [showHint, setShowHint] = useState(false);
  const [text, setText] = useState("");

  function handleChangeValue(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setText(e.target.value);
  }

  return (
    <>
      {showHint ? (
        <Answer
          text={text}
          showHint={showHint}
          setShowHint={setShowHint}
          handleChangeValue={handleChangeValue}
        />
      ) : (
        <Answer
          text={text}
          showHint={showHint}
          setShowHint={setShowHint}
          handleChangeValue={handleChangeValue}
        />
      )}
    </>
  );
}

const Answer: React.FC<PropAnswer> = ({
  showHint,
  setShowHint,
  text,
  handleChangeValue,
}) => {
  return (
    <div>
      {showHint && (
        <p>
          <i>Hint: Your favorite city?</i>
        </p>
      )}
      <Form text={text} handleChangeValue={handleChangeValue} />
      <br></br>
      <button
        onClick={() => {
          setShowHint(!showHint);
        }}
      >
        {showHint ? "Show hint" : "Hide hint"}
      </button>
    </div>
  );
};

const Form: React.FC<PropForm> = ({ text, handleChangeValue }) => {
  return <textarea value={text} onChange={(e) => handleChangeValue(e)} />;
};
