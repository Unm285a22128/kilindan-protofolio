 // Function to animate words one by one
 function animateWords(textElement, words, index, delay) {
    setTimeout(function() {
      textElement.textContent = words[index];
      index++;
      if (index >= words.length) {
        index = 0; // Reset index to 0 if it exceeds the length of the word list
      }
      animateWords(textElement, words, index, delay);
    }, delay);
  }

  // Call the function with the desired words and delay
  animateWords(document.getElementById('animatedText'), ["DEVELOPER", "DESIGNER", "FRELANCER"], 0, 1000);
