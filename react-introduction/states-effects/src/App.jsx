import { useState } from "react";
import sculptureList from "./data";
import "./App.css";

function ColorsElement() {
  const COLORS = ["pink", "green", "blue", "yellow", "purple", "cyan"];
  const [backgroundColor, setBackgroundColor] = useState(COLORS[0]);
  const [numChanges, setNumChanges] = useState(0);

  const onButtonClick = (color) => () => {
    setBackgroundColor(color);

    if(backgroundColor !== color) {
      setNumChanges(numChanges + 1);
    }
  };
  const onResetClick = () => {
    setNumChanges(0);
  }

  return (
    <>
      <div
        className="colors-container"
        style={{
          backgroundColor,
        }}
      >
        {COLORS.map((color) => (
          <button
            type="button"
            key={color}
            onClick={onButtonClick(color)}
            className={backgroundColor === color ? "selected" : ""}
          >
            {color}
          </button>
        ))}
      </div>
      <button onClick={onResetClick}>num of changes: {numChanges} (click to reset)</button>
    </>
  );
}

function SendForm() {
  const [isSent, setIsSent] = useState(false);
  const [message, setMessage] = useState("");

  if (isSent) {
    return <h1>Thank you!</h1>;
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        alert(`Sending: "${message}"`);
        setIsSent(true);
      }}
    >
      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <br />
      <button type="submit">Send</button>
    </form>
  );
}

function App() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  const hasNext = index < sculptureList.length - 1;
  const hasPrev = index > 0;

  function handlePrevClick() {
    setIndex(index - 1);
  }
  function handleNextClick() {
    setIndex(index + 1);
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];
  return (
    <>
      <div className="button-container">
        <button onClick={handlePrevClick} disabled={!hasPrev}>
          Previous
        </button>
        <button onClick={handleNextClick} disabled={!hasNext}>
          Next
        </button>
      </div>
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? "Hide" : "Show"} details
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <img src={sculpture.url} alt={sculpture.alt} />

      <br />
      <SendForm></SendForm>
      <ColorsElement></ColorsElement>
    </>
  );
}

export default App;
