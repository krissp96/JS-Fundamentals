function condense(arr) {
  while (arr.length > 1) {
    let condensed = [];

    for (let i = 0; i < arr.length - 1; i++) {
      condensed.push(arr[i] + arr[i + 1]);
    }
    arr = condensed;
    // console.log(arr);
  }
  console.log(arr);
}
condense([1, 5, 7, 9]);

// function condense(numbers) {
//     while (numbers.length > 1) {
//         let condensed = [];
//         for (let i = 0; i < numbers.length - 1; i++) {
//             condensed.push(numbers[i] + numbers[i + 1]);
//         }
//         numbers = condensed;
//     }
//     return numbers[0];
// }
