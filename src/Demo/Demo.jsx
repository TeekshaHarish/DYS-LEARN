import React from "react";
import { useState } from "react";
import "./demo.css";
import { level3 } from "../seeds/level_3";
import { level2 } from "../seeds/level_2";
import { level1 } from "../seeds/level_1";

const calcScore = (input1, input2, takenWords) => {
  let score = 0;
  for (let i = 0; i < 5; i++) {
    if (
      input1[i].toLowerCase() === takenWords[i].pair.word1.toLowerCase() &&
      input2[i].toLowerCase() === takenWords[i].pair.word2.toLowerCase()
    ) {
      score++;
    }
  }
  return score;
};
const InputElement = ({ promptWord1, promptWord2, onSubmit }) => {
  const [inputValue1, setInputValue1] = useState("");
  const [inputValue2, setInputValue2] = useState("");

  const handleInputChange1 = (e) => {
    setInputValue1(e.target.value);
  };
  const handleInputChange2 = (e) => {
    setInputValue2(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(inputValue1, inputValue2);
    setInputValue1("");
    setInputValue2("");
  };

  return (
    <div>
      <div className="upper">
        <div className="left-word">
          <p>{promptWord1}</p>
        </div>
        <div className="right-word">
          <p>{promptWord2}</p>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="lower">
          <div className="left-input">
            <label htmlFor="input1">Enter word1 </label>

            <input
              type="text"
              value={inputValue1}
              onChange={handleInputChange1}
            />
          </div>
          <div className="right-input">
            <label htmlFor="input2">Enter word2</label>
            <input
              type="text"
              value={inputValue2}
              onChange={handleInputChange2}
            />
          </div>
        </div>

        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Function to take out 10 random elements from an array
function takeRandomElements(inputArray, numElements) {
  // Copy the original array to avoid modifying it
  const arrayCopy = [...inputArray];

  // Shuffle the array
  shuffleArray(arrayCopy);

  // Take the first numElements elements
  const randomElements = arrayCopy.slice(0, numElements);

  return randomElements;
}

const Demo = () => {
  const [inputValues1, setInputValues1] = useState([]);
  const [inputValues2, setInputValues2] = useState([]);
  const [currentPromptIndex, setCurrentPromptIndex] = useState(0);
  const [resultText, setResultText] = useState("");
  const [levelArray, setLevelArray] = useState(level1);
  const takenWords = takeRandomElements(levelArray, 5);

  // const submit
  const handleInputSubmit = (value1, value2) => {
    setInputValues1([...inputValues1, value1]);
    setInputValues2([...inputValues2, value2]);

    // Move to the next prompt if available
    if (currentPromptIndex < takenWords.length - 1) {
      setCurrentPromptIndex(currentPromptIndex + 1);
    } else {
      // All prompts are done, you can do something with the collected input values
      //   setFinalScore(calcScore(inputValues1,inputValues2, takenWords))
      console.log(
        "All prompts completed:",
        calcScore(inputValues1, inputValues2, takenWords)
      );
      setResultText(
        `Good! Your score in this level is ${calcScore(
          inputValues1,
          inputValues2,
          takenWords
        )}`
      );
    }
  };

  const submitFilter = (e) => {
    e.preventDefault();
    console.log(e.target.level.value);
    const lvl = e.target.level.value;
    if (lvl === "level1") setLevelArray(level1);
    else if (lvl === "level2") setLevelArray(level2);
    else setLevelArray(level3);
    console.log("New array ", levelArray);
  };

  return (
    <div>
      <h2>Welcome to text recognition</h2>
      <div className="container">
        <form onSubmit={submitFilter}>
          <select name="level">
            <option value="level1">Level1</option>
            <option value="level2">Level2</option>
            <option value="level3">Level3</option>
          </select>
          <button type="submit">Choose Level</button>
        </form>
        <div className="ques-no">{`${currentPromptIndex + 1}/10`}</div>
        <InputElement
          promptWord1={takenWords[currentPromptIndex].pair.word1}
          promptWord2={takenWords[currentPromptIndex].pair.word2}
          onSubmit={handleInputSubmit}
        />
        {resultText && (
          <div className="result-text-holder">
            <p className="result-text">{resultText}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Demo;
