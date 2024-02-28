let myObj = {};

myObj.peter = 123;
myObj.john = 1;
myObj.anna = 2;
myObj["0 "] = "$150fs";

console.log(myObj);

for (let [key, value] of Object.entries(myObj)) {
  console.log(key, " -> ", value);
}
