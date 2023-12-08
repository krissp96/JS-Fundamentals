function cookingMasterclass(
  budget,
  students,
  flourPrice,
  eggPrice,
  apronPrice
) {
  const apronsPerStudent = Math.ceil(students * 1.2); // 20% more aprons rounded up
  const flourPackages = Math.ceil(students / 5) * students; // Every fifth flour package is free
  const totalCost =
    flourPackages * flourPrice +
    students * 10 * eggPrice +
    apronsPerStudent * apronPrice;

  if (totalCost <= budget) {
    console.log(`Items purchased for ${totalCost.toFixed(2)}$.`);
  } else {
    const neededMoney = (totalCost - budget).toFixed(2);
    console.log(`${neededMoney}$ more needed.`);
  }
}

cookingMasterclass(50, 2, 1.0, 0, 10, 10);
