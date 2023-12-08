//how the methods work

let arr = [10, 20, 30, 40, 50];
console.log(includes(arr, 20));
console.log(indexOf(arr, 30));
console.log(slice(arr, 1, 5));
console.log(join(arr, " ---- "));
//includes
function includes(inputArr, element) {
  for (let item of inputArr) {
    if (item === 20) {
      return true;
    }
  }
}

//indexOf

function indexOf(inputArr, element) {
  for (let i = 0; i < inputArr.length; i++) {
    if (inputArr[i] === element) {
      return i;
    }
  }
  return -1;
}

//slice

function slice(inputArr, start, end) {
  //create outputArr
  let output = [];
  //begin iterating input array from starting index
  for (let i = start; i < end; i++) {
    //copy values from input to output
    output.push(inputArr[i]);
  }
  //when end index is reached return result

  return output;
}

//join

function join(inputArr, str) {
  let result = "";

  for (let i = 0; i < inputArr.length - 1; i++) {
    result += String(inputArr[i]);
    result += str;
  }

  if (inputArr.length > 0) {
    result += inputArr[inputArr.length - 1];
  }
  return result;
}
