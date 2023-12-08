function identical(arr1, arr2) {
  let sumOfEquals = 0;
  let sumOfArr2 = 0;
  for (let i = 0; i < arr1.length; i++) {
    arr1[i] = Number(arr1[i]);
    sumOfEquals += arr1[i];

    // console.log(arr1);
  }
  for (let i = 0; i < arr2.length; i++) {
    arr2[i] = Number(arr2[i]);
    sumOfArr2 += arr2[i];
  }
  let areEqual = true;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      console.log(`Arrays are not identical. Found difference at ${i} index`);
      areEqual = false;
      break;
    }
  }
  for (let i = 0; i < arr1.length; i++) {
    if (sumOfEquals === sumOfArr2 && arr1[i] == arr2[i]) {
      console.log(`Arrays are identical. Sum: ${sumOfEquals}`);
      areEqual = true;
      break;
    }
  }
}
identical(["10", "20", "30"], ["10", "20", "30"]);
identical(["1", "2", "3", "4", "5"], ["1", "2", "4", "4", "5"]);
