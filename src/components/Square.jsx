import React, {useContext} from "react";
import { AppContext } from "../pages/GamePage";
function Square({ letterPos, attemptVal }) {

  const {board, wordPlay, currentAttempt} = useContext(AppContext)
  const letter = board[attemptVal][letterPos]

  const correct = wordPlay[letterPos] === letter
  const almost = !correct&& letter !== "" && wordPlay.includes(letter)
  const class1 = "block border-2 m-1 bg-[green] text-center border-black md:w-16 md:h-16 rounded md:text-5xl text-white"
  const class2 = "block border-2 m-1 bg-[#ffff0094] text-center border-black md:w-16 md:h-16 rounded md:text-5xl text-white"
  const class3 = "block border-2 m-1 bg-[#2c2a2a] text-center border-black md:w-16 md:h-16 rounded md:text-5xl text-white"

  const letterState = 
  currentAttempt.attempt > attemptVal &&
  (correct ? class1 : almost ? class2 : class3);
  return (
    <div
      className={letterState} id="normal"
    >
      {letter}
    </div>
  );
}

export default Square;
