function place(string, char, match) {
  let word = string;
  let result = "";
  for (let i = 0; i < word.length; i++) {
    if (word[i] == "_") {
      result += char;
    } else {
      result += word[i];
    }
    // console.log(word[i]);
  }
  if (result == match) {
    console.log("Matched");
  } else {
    console.log("Not Matched");
  }
}

place("Str_ng", "I", "Strong");
place("Str_ng", "i", "String");
place("H_llo", "e", "Hello");
place("_eorge", "P", "George");
