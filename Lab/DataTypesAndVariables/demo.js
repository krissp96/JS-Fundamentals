function solve(word1, word2) {
  let result = word1.replace("guz", word2);
  let output = result === word2 ? "Matched" : "Not Matched";

  console.log(output);
  console.log(result);
}

solve("pedal", "peagus");
