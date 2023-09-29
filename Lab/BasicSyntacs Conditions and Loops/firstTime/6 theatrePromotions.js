function solve(day, age) {
  if (age < 0 || age > 122) {
    console.log("Error!");
  } else if (age <= 18) {
    switch (day) {
      case "Weekday":
        console.log("12$");
        break;
      case "Weekend":
        console.log("15$");
        break;
      case "Holiday":
        console.log("5$");
        break;
    }
  } else if (age <= 64) {
    switch (day) {
      case "Weekday":
        console.log("18$");
        break;
      case "Weekend":
        console.log("20$");
        break;
      case "Holiday":
        console.log("12$");
        break;
    }
  } else if (age <= 122) {
    switch (day) {
      case "Weekday":
        console.log("12$");
        break;
      case "Weekend":
        console.log("15$");
        break;
      case "Holiday":
        console.log("10$");
        break;
    }
  }
}
solve("Weekday", 16);
solve("Weekday", 16);
solve("Weekday", -19);
solve("Weekday", 74);
solve("Weekday", 22);
console.log("---------");
solve("Weekend", 150);
solve("Weekend", -9);
solve("Weekend", 12);
solve("Weekend", 32);
console.log("---------");
solve("Holiday", 16);
solve("Holiday", 22);
solve("Holiday", 72);
