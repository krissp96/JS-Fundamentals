function meetings(input) {
  let calendar = {};
  for (let item of input) {
    let [day, name] = item.split(" ");
    if (calendar.hasOwnProperty(day)) {
      console.log(`Conflict on ${day}`);
      continue;
    } else {
      console.log(`Scheduled for ${day}`);
    }
    // console.log(day, name);
    calendar[day] = name;
  }
  for (let [day, name] of Object.entries(calendar)) {
    console.log(day, "->", name);
  }
  //   console.log(calendar);
}

meetings(["Monday Peter", "Wednesday Bill", "Monday Tim", "Friday Tim"]);
meetings([
  "Friday Bob",
  "Saturday Ted",
  "Monday Bill",
  "Monday John",
  "Wednesday George",
]);
