function reversingIt(n, arr) {
  let reversed = [];

  for (let i = n; i > 0; i--) {
    reversed.push(arr[i - 1]);
    console.log(i);
    console.log(reversed);
  }
  console.log(reversed.join(" "));
  //   console.log(arr);
}
reversingIt(3, [10, 20, 30, 40]);

//zashto po dqvolite rabooti i sus arr.length - 1 // mi shoto si tup kristiqne
