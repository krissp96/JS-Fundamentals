function calculateFood(input) {
  let food = input.split(/[|#]/g);
  let totalCalories = 0;
  let days = 0;
  for (let i = 0; i < food.length; i += 3) {
    let [name, date, calories] = food.slice(i, i + 3);
    totalCalories += Number(calories);
    let expirationDate = new Date(date);
    let today = new Date();
    let diffTime = expirationDate - today;
    let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    if (diffDays >= 0) {
      days += diffDays;
      console.log(
        `Item: ${name}, Best before: ${date}, Nutrition: ${calories}`
      );
    }
  }
  console.log(
    `You have food to last you for: ${Math.floor(days / 2000)} days!`
  );
}
calculateFood(
  "#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|"
);
