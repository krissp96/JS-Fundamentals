function solve(input) {
  let list = input.shift().split(", ");
  let blacklistedNames = [];
  let errorCount = [];

  for (let i = 0; i < input.length - 1; i++) {
    let line = input[i].split(" ");
    let command = line[0];

    switch (command) {
      case "Blacklist":
        let name = line[1];
        if (list.includes(name)) {
          let index = list.indexOf(name);

          list.splice(index, 1, "Blacklisted");
          blacklistedNames.push(name);
          console.log(`${name} was blacklisted.`);
        } else {
          console.log(`${name} was not found.`);
        }

        break;
      case "Error":
        let indexOfErr = Number(line[1]);

        if (indexOfErr >= 0 && indexOfErr < list.length) {
          let slicedName = list[indexOfErr];
          if (
            !blacklistedNames.includes(slicedName) &&
            !errorCount.includes(slicedName)
          ) {
            if (slicedName == "Lost") {
              break;
            }
            list.splice(indexOfErr, 0, "Lost");
            errorCount.push(slicedName);
            console.log(`${slicedName} was lost due to an error.`);
          } else {
            break;
          }
        }

        break;
      case "Change":
        let indexToMove = Number(line[1]);
        let person = line[2];
        if (indexToMove >= 0 && indexToMove < list.length) {
          let oldName = list[indexToMove];
          list.splice(indexToMove, 1, person);
          console.log(`${oldName} changed his username to ${person}.`);
        }

        break;
    }
  }

  console.log(`Blacklisted names: ${blacklistedNames.length}`);
  console.log(`Lost names: ${errorCount.length}`);
  console.log(` ${list.join(" ")}`);
}
solve([
  "Mike, John, Eddie, William",
  "Blacklist Maya",
  "Error 1",
  "Change 4",
  "George",
  "Report",
]);
