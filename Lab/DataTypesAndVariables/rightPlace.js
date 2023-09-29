function rightPlace(word, symbol, match) {
  //create new string from word and symbol, replacing '_'

  let result = "";

  for (let i = 0; i < word.length; i++) {
    if (word[i] == "_") {
      result += symbol;
    } else {
      result += word[i];
      console.log(word);
    }
  }
  //compare result with match
  if (result == match) {
    // console.log("Matched");
  } else {
    console.log("Not Matched");
  }
  // print result
}
rightPlace("Str_ng", "I", "Strong");
rightPlace("Str_ng", "i", "String");
rightPlace("H_llo", "e", "Hello");
rightPlace("_eorge", "P", "George");
