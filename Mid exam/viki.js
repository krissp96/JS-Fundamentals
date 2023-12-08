function solve(input) {
  let list = input.shift().split(", ");
  let arguments = input.shift();
  let blacklistedNames = [];
  let errorCount = [];

  while (arguments !== "Report") {
    let line = arguments.split(" ");
    let command = line[0];

    switch (command) {
      case "Blacklist":
        let name = line[1];
        if (list.includes(name)) {
          let index = list.indexOf(name);

          let splicedName = list.splice(index, 1, "Blacklisted");
          blacklistedNames.push(splicedName);
          console.log(`${name} was blacklisted.`);
        } else {
          console.log(`${name} was not found.`);
        }

        break;
      case "Error":
        let indexOfErr = Number(line[1]);
        let slicedName = list[indexOfErr];

        if (slicedName) {
          if (indexOfErr >= 0 && indexOfErr < list.length) {
            if (slicedName == "Lost" && slicedName == "Blacklisted") {
              break;
            } else {
              list.splice(indexOfErr, 1, "Lost");
              errorCount.push(slicedName);
              console.log(`${slicedName} was lost due to an error.`);
            }
          }
        }

        break;
      case "Change":
        let indexToMove = Number(line[1]);
        let person = line[2];
        if (indexToMove >= 0 && indexToMove < list.length) {
          let oldName = list.splice(indexToMove, 1);
          list.splice(indexToMove, 1, person);
          console.log(`${oldName} changed his username to ${person}.`);
        }

        break;
    }

    arguments = input.shift();
  }

  console.log(`Blacklisted names: ${blacklistedNames.length}`);
  console.log(`Lost names: ${errorCount.length}`);
  console.log(`${list.join(" ")}`);
}
