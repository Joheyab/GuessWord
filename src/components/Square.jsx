import React, {useContext} from "react";
import { AppContext } from "../pages/GamePage";
function Square({ letterPos, attemptVal }) {

  const {board, wordPlay, currentAttempt} = useContext(AppContext)
  const letter = board[attemptVal][letterPos]

  const correct = wordPlay[letterPos] === letter
  const almost = !correct&& letter !== "" && wordPlay.includes(letter)


  const letterState = 
  currentAttempt.attempt > attemptVal &&
  (correct ? "green" : almost ? "#ffff0094" : "#2c2a2a");
  return (
    <div
      className={`block bg-[${letterState}] border-2 m-1 text-center border-black md:w-16 md:h-16 rounded md:text-5xl dark:text-white sm:w-14 sm:h-14 sm:text-4xl`}
    >
      {letter}
    </div>
  );
}

export default Square;
