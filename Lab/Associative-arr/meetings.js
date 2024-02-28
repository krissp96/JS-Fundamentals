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
    console.log(day, name);
    calendar[day] = name;
  }
  console.log(calendar);
}
