function evenAndOdd(arr) {
  let even = 0;
  let odd = 0;
  for (let num of arr) {
    if (num % 2 === 0) {
      even += num;
    } else {
      odd += num;
    }
  }
  console.log(even - odd);
}

evenAndOdd([1, 2, 3, 4, 5, 6]);
evenAndOdd([3, 5, 7, 9]);
evenAndOdd([2, 4, 6, 8, 10]);
