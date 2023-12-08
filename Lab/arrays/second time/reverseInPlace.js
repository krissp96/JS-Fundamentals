// let arr = [1, 2, 3, 4, 5];
// console.log(arr);
// console.log(arr.length);

function reverse(arr) {
  for (let i = 0; i < arr.length / 2; i++) {
    let oldElement = arr[i];
    console.log(oldElement, "old elements");
    let previousIndex = arr.length - 1 - i;
    console.log(previousIndex);
    arr[i] = arr[previousIndex];
    console.log(arr, "thats arr");
    arr[previousIndex] = oldElement;
    console.log(arr, "thats arr previous");
  }
  console.log(arr.join(" "));
}
reverse(["a", "b", "c", "d", "e"]);
