function solve(n, nums) {
  //create new array
  let reversed = [];
  // copy n values from given array to new array
  //reverse resulting array
  for (let i = n - 1; i >= 0; i--) {
    reversed.push(nums[i]);
  }
  // print result on single line

  console.log(reversed.join(" "));
}
solve(3, [10, 20, 30, 50, 60]);
solve(4, [-1, 20, 99, 5, 70]);
solve(2, [10, 22, 33, 50, 60]);
solve(5, [14, 20, 30, 50, 60]);

//alternative

function solve(n, nums) {
  //   let result = nums.slice(0, n);
  //   let reversed = result.reverse();
  //   console.log(reversed.join(" "));
  //   //or chained
  //   console.log(nums.slice(0, n).reverse().join(" "));
  //   //arrowed method
}
solve(3, [10, 20, 30, 50, 60]);
solve(4, [-1, 20, 99, 5, 70]);
solve(2, [10, 22, 33, 50, 60]);
solve(5, [14, 20, 30, 50, 60]);

(n, nums) => nums.slice(0, n).reverse().join(" ");
