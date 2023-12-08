function cooking(input) {
  let budget = Number(input[0]);
  let students = Number(input[1]);
  let pricePerPackFlour = Number(input[2]);
  let priceSingleEgg = Number(input[3]);
  let pricePerApron = Number(input[4]);

  let priceEggsPerStudent = priceSingleEgg * 10;
  let totalEgsPrice = priceEggsPerStudent * students;
  let apronsPrice = pricePerApron * Math.ceil(students + students * 0.2);
  let freeFlourPack = 0;
  console.log(apronsPrice);
  for (let i = 1; i <= students; i++) {
    if (i % 5 == 0) {
      freeFlourPack += 1;
    }
  }

  let flourPrice = pricePerPackFlour * (students - freeFlourPack);

  let BudgetNeeded = flourPrice + totalEgsPrice + apronsPrice;

  if (budget >= BudgetNeeded) {
    console.log(`Items purchased for ${BudgetNeeded.toFixed(2)}$.`);
  } else {
    console.log(`${(BudgetNeeded - budget).toFixed(2)}$ more needed.`);
  }
}
cooking(["10", "3", "4", "5", "1"]);
