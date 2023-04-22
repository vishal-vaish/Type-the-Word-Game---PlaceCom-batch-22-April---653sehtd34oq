// import React, { useState, useEffect } from 'react';
// import "../styles/App.css"

// const WORD_LIST = ['apple', 'banana', 'cherry', 'grape', 'orange'];

// function App() {
//   const [word, setWord] = useState('');
//   const [flashWord, setFlashWord] = useState(true);
//   const [userInput, setUserInput] = useState('');
//   const [result, setResult] = useState('');
//   const [index, setIndex] = useState(0);


//   return (
//     <div class="mini-game-container">
//       <h2 class="mini-game-title">Mini Game</h2>
//       <p class="mini-game-word">{word}</p>
//       <form class="mini-game-form" onSubmit={handleFormSubmit}>
//         <input class="mini-game-input" type="text" value={userInput} onChange={handleInputChange} />
//         <button class="mini-game-button" type="submit">Check Answer</button>
//       </form>
//       {result && (
//         <>
//           <p class="mini-game-result">{result}</p>
//           <button class="mini-game-restart-button" onClick={handleRestartClick}>Restart</button>
//         </>
//       )}
//     </div>
//   );
// }

// export default App;










import React, { useState, useEffect } from "react";

const WORD_LIST = ["apple", "banana", "orange", "mango", "grape"];

function Game() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayWord, setDisplayWord] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const [gameResult, setGameResult] = useState("");

  const currentWord = WORD_LIST[currentWordIndex];

  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplayWord(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue === currentWord) {
      setGameResult("You Won!");
    } else {
      setGameResult("You Lost!");
    }
  };

  const handleRestart = () => {
    setDisplayWord(true);
    setInputValue("");
    setGameResult("");
    setCurrentWordIndex(currentWordIndex + 1);
  };

  useEffect(() => {
    if (!displayWord) {
      const timer = setTimeout(() => {
        setDisplayWord(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [displayWord]);

  return (
    <div>
      {displayWord && <p>{currentWord}</p>}
      {!displayWord && (
        <form onSubmit={handleSubmit}>
          <input type="text" value={inputValue} onChange={handleInputChange} />
          <button type="submit">Submit</button>
        </form>
      )}
      {gameResult && (
        <div>
          <p>{gameResult}</p>
          <button onClick={handleRestart}>Restart</button>
        </div>
      )}
    </div>
  );
}

export default Game;