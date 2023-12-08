function sumEven(arr) {
  let sum = 0;
  let odd = [];
  for (let i = 0; i < arr.length; i++) {
    arr[i] = Number(arr[i]);
    if (arr[i] % 2 === 0) {
      sum += arr[i];
      // } else if (arr[i] % 2 !== 0) {
      //   odd += arr[i];
      // }
    }
    //   console.log(`${odd} It's not a even number;`);
  }
  console.log(sum);
}
sumEven(["1", "2", "3", "4", "5", "6"]);
sumEven(["3", "5", "7", "9"]);
sumEven(["2", "4", "6", "8", "10"]);
