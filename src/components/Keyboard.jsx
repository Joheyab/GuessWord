import React, { useContext, useCallback, useEffect } from "react";
import { AppContext } from "../pages/GamePage";
import Key from "./Key";

function Keyboard() {
  const { onEnter, onDelete, onSelectLetter, currentAttempt } = useContext(AppContext);

  const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];

  const handleKeyboard = useCallback(
    (event) => {
      if (event.key === "Enter") {
        onEnter();
      } else if (event.key === "Backspace") {
        onDelete();
      } else {
        keys1.forEach((key) => {
          if (event.key.toLowerCase() === key.toLowerCase()) {
            onSelectLetter(key);
          }
        });
        keys2.forEach((key) => {
          if (event.key.toLowerCase() === key.toLowerCase()) {
            onSelectLetter(key);
          }
        });
        keys3.forEach((key) => {
          if (event.key.toLowerCase() === key.toLowerCase()) {
            onSelectLetter(key);
          }
        });
      }
    },
    [currentAttempt]
  );
  useEffect(() => {
    document.addEventListener("keydown", handleKeyboard);

    return () => {
      document.removeEventListener("keydown", handleKeyboard);
    };
  }, [handleKeyboard]);
  return (
    <div
      className="flex flex-col justify-center text-center items-center"
      onKeyDown={handleKeyboard}
    >
      <div className="flex">
        {keys1.map((key, index) => {
          return <Key key={index} keyValue={key} />;
        })}
      </div>
      <div className="flex">
        {keys2.map((key, index) => {
          return <Key key={index} keyValue={key} />;
        })}
      </div>
      <div className="flex">
        <Key keyValue={"ENTER"} bigKey />
        {keys3.map((key, index) => {
          return <Key key={index} keyValue={key} />;
        })}
        <Key keyValue={"DELETE"} bigKey />
      </div>
    </div>
  );
}

export default Keyboard;
