function evenSums(arr) {
  let sum = 0;
  let conv = 0;
  for (let num of arr) {
    let numbers = Number(num);

    if (numbers % 2 === 0) {
      sum += numbers;
    }
  }
  console.log(sum);
}
evenSums(["2", "4", "6", "8", "10"]);
