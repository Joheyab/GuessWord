import React, { useEffect, useState, createContext } from "react";
import Navbar from "../components/Navbar";
import Board from "../components/Board";
import Keyboard from "../components/Keyboard";
import { boardDefault } from "../logic/Words";
import ResultModal from "../components/ResultModal";

export const AppContext = createContext();
function GamePage() {
  const [wordPlay, setWordPlay] = useState("");
  const [board, setBoard] = useState(boardDefault);
  const [currentAttempt, setCurrentAttempt] = useState({attempt: 0, letterPos: 0});
  const [status, setStatus] = useState("");
  const [showResult, setShowResult] = useState(false);


  const onSelectLetter = (keyValue) => {
    if(currentAttempt.letterPos > 4) return
    const newBoard = [...board]
    newBoard[currentAttempt.attempt][currentAttempt.letterPos] = keyValue
    setBoard(newBoard)
    setCurrentAttempt({...currentAttempt, letterPos: currentAttempt.letterPos + 1})
  }

  const onDelete = () => {
    if(currentAttempt.letterPos === 0) return
    const newBoard = [...board]
    newBoard[currentAttempt.attempt][currentAttempt.letterPos - 1] = ""
    setBoard(newBoard)
    setCurrentAttempt({...currentAttempt, letterPos: currentAttempt.letterPos - 1})
  }

  const onEnter = () => {
    if(currentAttempt.letterPos !== 5) return;
    let currentWord = ""
    for (let i = 0; i < 5; i++){
      currentWord += board[currentAttempt.attempt][i]
    }
    setCurrentAttempt({attempt: currentAttempt.attempt + 1, letterPos: 0})
    
    if (currentWord === wordPlay) {
      setStatus("win")
      setShowResult(!showResult)
    }
    if (currentAttempt.attempt === 5 && currentWord !== wordPlay) {
      setStatus("lose")
      setShowResult(!showResult)
      return;
    }
  }

  const getWordToPlay = () => {
    fetch("./words.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setWordPlay(
          myJson[Math.floor(Math.random() * myJson.length)].Word.toUpperCase()
        );
      });
  };

  const resetBoard = () => {
    setCurrentAttempt({attempt: 0, letterPos: 0})
    setBoard(board)
  }
  useEffect(() => {
    getWordToPlay();
  }, [wordPlay]);
  return (
    <>
      <Navbar />
      <main className=" flex flex-col pt-8 items-center h-screen dark:bg-gray-700 gap-8">
        <AppContext.Provider value={{board, setBoard, currentAttempt, setCurrentAttempt, onSelectLetter, onDelete, onEnter, wordPlay}}>
          <Board />
          <Keyboard />
          {showResult ? <ResultModal status={status}/> : null}
        </AppContext.Provider>
      </main>
    </>
  );
}

export default GamePage;
