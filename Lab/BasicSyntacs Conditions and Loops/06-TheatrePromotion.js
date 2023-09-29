function solve(day, age) {
  if (age < 0 || age > 124) {
    let price;
    console.log("Error!");
  } else if (age <= 18) {
    let price;
    switch (day) {
      case "Weekday":
        price = 12;
        break;
      case "Weekend":
        price = 15;
        break;
      case "Holiday":
        price = 5;

        break;
    }
    console.log(`${price}$`);
  } else if (age <= 64) {
    let price;
    switch (day) {
      case "Weekday":
        price = 18;
        break;
      case "Weekend":
        price = 20;
        break;
      case "Holiday":
        price = 12;

        break;
    }
    console.log(`${price}$`);
  } else if (age <= 124) {
    let price;
    switch (day) {
      case "Weekday":
        price = 12;
        break;
      case "Weekend":
        price = 15;
        break;
      case "Holiday":
        price = 10;

        break;
    }
    console.log(`${price}$`);
  }
}

solve("Weekday", 14);
solve("Weekend", 86);
solve("Holiday", 35);
solve("Weekday", 2856);
