function solve(arr) {
  for (let i = 0; i < arr.length / 2; i++) {
    console.log(i);
    let j = arr.length - 1 - i;
    console.log(j, "thats J");
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  console.log(arr.join(" "));
}
solve(["a", "b", "c", "d", "e", "f"]);
