function solve(odd) {
  let sum = 0;

  for (let i = 1; i <= odd * 2; i += 2) {
    sum += i;
    console.log(i);
  }
  console.log(`Sum: ${sum}`);
}
solve(3);
