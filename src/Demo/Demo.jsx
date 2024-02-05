import React from 'react'
import './demo.css'
import {level3} from '../seeds/level_3'
import { div } from '@tensorflow/tfjs';



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

  const takenWords=takeRandomElements(level3,10)
const Demo = () => {
  return (
    <div>
      <h2>Welcome to text recognition</h2>
      <div className="container">
        <form action="">
            <select name="" id="">
                <option value="l1">Level1</option>
                <option value="l2">Level2</option>
                <option value="l3">Level3</option>
                
            </select>
        </form>
        <div className="upper">
            <div className="left-text">
            <ul>
        {takenWords.map((element, index) => (
          <li key={index}>{element.pair.word1}</li>
        ))}
      </ul>
            </div>
            <div className="right-text">
            <ul>
        {takenWords.map((element, index) => (
          <li key={index}>{element.pair.word2}</li>
        ))}
      </ul>

            </div>
        </div>
        <form>
        <div className="lower">
            
        <div className="left-input">
            <label htmlFor="input-1">ENTER FIRST WORD</label>
               <input type="text" name="" id="" />
            </div>
            <div className="right-input">
            <label htmlFor="input-1">ENTER SECOND WORD</label>
            <input type="text" name="" id="" />

            </div>
           

        </div>
        </form>
      </div>
    </div>
  )
}

export default Demo
