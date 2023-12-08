// push();
// includes();
// toString();
// join();

function join(arr) {
  console.log(arr.join(":"));
}

join([50, 20, 40, 30]);

function pushMethod(arr) {
  arr.push(50);
  console.log(arr);
}
pushMethod([15, 25, 40]);

function includes(arr) {
  console.log(arr.includes(30));
}
includes([10, 20, 50, 30]);

function str(arr) {
  console.log(arr);
  console.log(arr.toString());
}
str([10, 20, 50, 40]);
