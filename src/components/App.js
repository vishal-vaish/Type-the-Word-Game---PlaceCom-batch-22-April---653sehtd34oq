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

function App() {
    const [word,setWord]=useState('');
    const [flashWord,setFlashWord]=useState(true);
    const [userInput,setUserInput]=useState('');
    const [result,setResult]=useState('');
    const [index,setIndex]=useState(0);

  // const currentWord = WORD_LIST[currentWordIndex];

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFlashWord(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, [word]);
  
  useEffect(()=>{
    const timeout=setTimeout(() => {
      setFlashWord(false);
    }, 500);
    return ()=> clearTimeout(timeout);
  },[word]);

  useEffect(()=>{
    setWord(WORD_LIST[index]);
    setFlashWord(true);
    setUserInput('');
    setResult('');
  },[index]);

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (userInput.toLowerCase() === word.toLowerCase()) {
      setResult("You Won!");
    } else {
      setResult("You Lost!");
    }
  };

  const handleRestartClick = () => {
    if(index === WORD_LIST.length-1) {
      setIndex(0);
    }else {
      setIndex(index+1);
    }
  };

  return (
    <div className="mini-game-container">
        <h2 className="mini-game-title">Mini Game</h2>
          {flashWord && <p className="mini-game-word">{word}</p>}
          {!flashWord && (
        <form className="mini-game-form" onSubmit={handleFormSubmit}>
          <input className="mini-game-input" type="text" value={userInput} onChange={handleInputChange} />
          <button className="mini-game-button" type="submit">Check Answer</button>
        </form>
      )}
      {result && (
        <>
          <p className="mini-game-result">{result}</p>
          <button className="mini-game-restart-button" onClick={handleRestartClick}>Restart</button>
        </>
      )}
    </div>
  );
}

export default App;