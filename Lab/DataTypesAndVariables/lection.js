//Global scope

let a = 5;

function functionalScope() {
  //functional scope
  a++;
  console.log(a);
}
console.log(a);
functionalScope();

//var is a hoisted variable that can be accessed from the functional scope so it is not recommended to use it.

//typeof will return the type of something

// typeof a;

// will be = typeof a = 'number'

console.log(typeof a);

function strings() {
  //strings

  let name = "George";

  //you cann add to the string like this -->

  //   name += "asdf";

  console.log(name[0]);

  for (let i = 0; i <= name.length - 1; i++) {
    console.log(i, name[i]);
  }

  //reverse for loop
  for (let i = name.length - 1; i >= 0; i--) {
    console.log("Reversed", i, name[i]);
  }
}
strings();

//strings are immutable this means that once a string is created, it is not possible to modify it.

// string interpolation
function interpolation() {
  let name = "Rick";
  let age = 18;
  console.log(`${name} ${age}`);
}

function ternary() {
  // ternary operator
  let something;

  something = 20 >= 10 ? "returned true" : "returned false";

  console.log(something);
}
ternary();
