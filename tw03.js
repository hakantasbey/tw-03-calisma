// function reverseWordsWithoutArray(sentence) {
//   let reversedSentence = "";
//   let word = "";

//   for (let i = sentence.length - 1; i >= 0; i--) {
//     if (sentence[i] === " " || i === 0) {
//       if (i === 0) {
//         word += sentence[i]
//       }
//    }
//  }
// }
// const sentence = "Hello World!"
// console.log(reverseWordsWithoutArray(sentence));

// ========================================================

function reverseStringWithoutHelpOfArray(value) {
    value = String(value);
    let result = '';
    while (value) {
      result = result + value.slice(-1);
      value = value.substring(0, value.length - 1);
    }
    return result;
  }
  console.log(
    reverseStringWithoutHelpOfArray('Hello Js World 2023')
  );

//   =======================================================

function reverseWordsWithoutArray(sentence) {
    let reversedSentence = '';
    let word = '';
    let spaceDetected = false;
    for (let i = 0; i < sentence.length; i++) {
      if (sentence[i] === ' ') {
        if (spaceDetected) {
          reversedSentence += ' ';
        } else {
          spaceDetected = true;
        }
        reversedSentence += reverseWord(word);
        word = '';
      } else {
        word += sentence[i];
      }
    }
    reversedSentence += ' ' + reverseWord(word); // Reverse the last word
    return reversedSentence;
  }
  function reverseWord(word) {
    let reversedWord = '';
    for (let i = word.length - 1; i >= 0; i--) {
      reversedWord += word[i];
    }
    return reversedWord;
  }
  const inputSentence = "Hello Js World 2023";
  const reversedSentence = reverseWordsWithoutArray(inputSentence);
  console.log(reversedSentence); // "2023 World Js Hello"


//   ======================================================

function reversedWordsWithoutArray(inputSentence) {
    let reversedSentence = "";
    let currentWord = "";
    for (let i = 0; i < inputSentence.length; i++) {
      if (inputSentence[i] === " ") {
        reversedSentence = currentWord + " " + reversedSentence;
        currentWord = "";
      } else {
        currentWord += inputSentence[i];
      }
    }
    reversedSentence = currentWord + " " + reversedSentence;
    return reversedSentence;
  }
  const enteredSentence = "Hello World!";
  const reversed = reversedWordsWithoutArray(enteredSentence);
  console.log(reversed);


  //? tersten yazdirma 

  const reversedWitoutArray2 = (value) => {
    let reversedSentence=""
    let reversedWord =""

    for(let i =value.length -1;i>=0;i-- ){
        if(i===0 || i===" "){
           reversedWord +=value[i] 
        }else{
            reversedSentence+=value[i]
        }
    }for(j=reversedWord.length-1; j>=0;j--){
        reversedSentence+=reversedWord[j]
    }
    return reversedSentence
}
console.log(reversedWitoutArray2("Hello world! 2023"));





