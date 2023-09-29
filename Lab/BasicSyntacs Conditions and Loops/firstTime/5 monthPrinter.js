// function months(num) {
//   switch (num) {
//     case (num = 1):
//       console.log("January");
//       break;
//     case (num = 2):
//       console.log("February");
//       break;
//     case (num = 3):
//       console.log("March");
//       break;
//     case (num = 4):
//       console.log("April");
//       break;
//     case (num = 5):
//       console.log("May");
//       break;
//     case (num = 6):
//       console.log("June");
//       break;
//     case (num = 7):
//       console.log("July");
//       break;
//     case (num = 8):
//       console.log("August");
//       break;
//     case (num = 9):
//       console.log("September");

//     case (num = 10):
//       console.log("October");
//       break;
//     case (num = 11):
//       console.log("November");
//       break;
//     case (num = 12):
//       console.log("December");
//       break;
//     default:
//       console.log(`Error!`);
//       break;
//   }
// }
// months(123);

function printMonth(number) {
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

  if (number < 1 || number > 12) {
    console.log(months[0]);
  } else {
    console.log(months[number]);
  }
}

printMonth(10);
