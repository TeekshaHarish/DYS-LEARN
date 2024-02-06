import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuthContext } from "../../hooks/useAuthContext";
// import Speech from "speak-tts";
// import "./TextToSpeech.css";
import gtts from "gtts";

import { speech_level_1 } from "../../seeds/speech_level_1";
import { div } from "@tensorflow/tfjs";
const apiURL = import.meta.env.VITE_BACKEND_URL;

const Dictation = () => {
  //   const [text, setText] = useState("");
  const [audioUrl, setAudioUrl] = useState("");

  const { user } = useAuthContext();

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
  const dictationText = takeRandomElements(speech_level_1, 5);
  const [currentPromptIndex, setCurrentPromptIndex] = useState(0);
  const handleConvertTextToSpeech = async (text) => {
    try {
      console.log("in");
      if (user) {
        console.log("userr");
        const config = {
          headers: {
            Authorization: `Bearer ${user?.accessToken}`,
          },
        };
        const response = await axios.post(
          `${apiURL}/texttospeech/`,
          { text },
          config
        );
        console.log("res", response);
        if (response && response.status == 200 && response.data) {
          console.log("setting url", response.data.audio);
          setAudioUrl(response.data.audio);
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(error?.message);
    }
  };
  const calculateScore = (arr1, arr2) => {
    let score = 0;
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] === arr2[i]) {
        score++;
      }
    }
    return score;
  };
  const [writtenArray, setWrittenArray] = useState([]);

  const submitTextForm = (e) => {
    e.preventDefault();
    // console.log(value);
    console.log("SUBMITTED", dictationText, currentPromptIndex);
    setWrittenArray([...writtenArray, writtenText]);
    if (currentPromptIndex < dictationText.length - 1) {
      //   console.log("1 2");
      setCurrentPromptIndex(currentPromptIndex + 1);
      //   console.log("In");
      setup();
    } else {
      const score = calculateScore(dictationText, writtenArray);
      console.log(("SCORE IS ", score));
    }
  };
  const setup = () => {
    console.log("Calling setup");
    // console.log(dictationText, currentPromptIndex);
    // console.log(dictationText[currentPromptIndex].pair.word1);
    // console.log("TXT1", text);
    const newWord = dictationText[currentPromptIndex].pair.word1;
    console.log("NEW TEXT", newWord);
    // setText(dictationText[currentPromptIndex].pair.word1);
    // setText(dictationText[currentPromptIndex].pair.word1);
    // console.log("TXT2", text);
    if (newWord.length > 0) {
      handleConvertTextToSpeech(newWord);
    }
  };
  useEffect(() => {
    setup();
  }, []);

  const AudioText = () => {
    const [writtenText, setWrittenText] = useState("");
    return (
      <div>
        {audioUrl && (
          <audio controls>
            <source src={audioUrl} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        )}
        <form onSubmit={submitTextForm}>
          <input
            type="text"
            value={writtenText}
            onChange={(e) => setWrittenText(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  };
  return (
    <div className="tts__page__container">
      <h1>Text to Speech</h1>
      {/* <textarea
        placeholder="Enter text to convert to speech"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      /> */}
      {/* {setText(dictationText[currentPromptIndex])}
      {handleConvertTextToSpeech()} */}

      {/* <button className="primary__btn" onClick={handleConvertTextToSpeech}>
        Convert to Speech
      </button> */}
      <AudioText audioUrl={audioUrl} />
    </div>
  );
};

export default Dictation;
