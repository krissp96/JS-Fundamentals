function managePhoneShop(input) {
  let phones = input.shift().split(", ");

  for (let command of input) {
    if (command === "End") {
      break;
    }

    let [action, data] = command.split(" - ");

    if (action === "Add") {
      if (!phones.includes(data)) {
        phones.push(data);
      }
    } else if (action === "Remove") {
      let index = phones.indexOf(data);
      if (index !== -1) {
        phones.splice(index, 1);
      }
    } else if (action === "Bonus phone") {
      let [oldPhone, newPhone] = data.split(": ");
      let index = phones.indexOf(oldPhone);
      if (index !== -1) {
        phones.splice(index + 1, 0, newPhone);
      }
    } else if (action === "Last") {
      let index = phones.indexOf(data);
      if (index !== -1) {
        phones.splice(index, 1);
        phones.push(data);
      }
    }
  }

  console.log(phones.join(", "));
}

managePhoneShop([
  "SamsungA50, Motorola65, IphoneSE",
  "Add - Iphone10",
  "Remove - IphoneSE",
  "End",
]);
