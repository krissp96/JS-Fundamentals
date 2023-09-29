function solve(month) {
  const months = [
    "Error!",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  if (month >= 1 && month <= 12) {
    console.log(months[month]);
  } else {
    console.log(months[0]);
  }
}

solve(0);
solve(2);
solve(26);
solve(8);
solve(1);
solve(2);
