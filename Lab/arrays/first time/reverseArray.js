function solve(n, reverseArr) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(reverseArr[i]);
    let output = " ";
    for (let i = arr.length - 1; i >= 0; i--) {
      output += `${arr[i]}`;
    }
    console.log(arr);
  }
}
solve(3, [10, 20, 30, 40]);
// solve(4, [-1, 20, 99, 5]);
