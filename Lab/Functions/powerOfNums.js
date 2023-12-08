function print(value) {
  console.log(value);
  //created a method print to use instead of console.log
}
function myMath(x, y) {
  let result = 1;
  for (let i = 0; i < y; i++) {
    result = multiply(result, x);
  }
  return result;

  function multiply(a, b) {
    return a * b;
  }
}
print(myMath(2, 8));
print(multiply(2, 8));
