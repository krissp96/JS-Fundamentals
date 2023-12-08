function reversedPlaces(arr) {
  for (let i = 0; i < arr.length / 2; i++) {
    let oldElements = arr[i];
    let previousIndex = arr.length - 1 - i;
    arr[i] = arr[previousIndex];
    arr[previousIndex] = oldElements;
  }
  console.log(arr.join(" "));
}
reversedPlaces(["a", "b", "c", "d", "e"]);
