function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  
  // Function to take out 10 random elements from an array
  export const takeRandomElements=(inputArray, numElements) =>{
    // Copy the original array to avoid modifying it
    const arrayCopy = [...inputArray];
  
    // Shuffle the array
    shuffleArray(arrayCopy);
  
    // Take the first numElements elements
    const randomElements = arrayCopy.slice(0, numElements);
  
    return randomElements;
  }