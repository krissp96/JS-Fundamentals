let myAssocArr = {
  "John Smith": "+1-555-490417",
  "Kristiyan Krumov": "+1-555-490712",
  "Iva Todorova": "+1-555-490356",
};

console.log(myAssocArr);

for (let [contactName, phoneNumber] of Object.entries(myAssocArr)) {
  console.log(contactName, " -> ", phoneNumber);
}

delete myAssocArr["Kristiyan Krumov"];
console.log(myAssocArr);
