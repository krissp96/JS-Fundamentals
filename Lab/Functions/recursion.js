function countDown(x) {
  console.log(x);
  if (x > 0) {
    countDown(x - 1);
  }
}
countDown(10);

//selv invocation (recursion example) its always better to use while loop or for loop when possible.
