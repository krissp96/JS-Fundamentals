function printCertificate(grade, arr) {
  //Early return pattern!
  if (!pass(grade)) {
    return console.log(`Student does not qualify`);
  }
  printHeader();
  readFullName(arr[0], arr[1]);
  formatGrade(grade);
  function formatGrade(grade) {
    if (grade < 3.0) {
      console.log(`Fail (2)`);
    } else if (grade >= 3.0 && grade < 3.5) {
      console.log(`Poor (${grade.toFixed(2)})`);
    } else if (grade >= 3.5 && grade < 4.5) {
      console.log(`Good (${grade.toFixed(2)})`);
    } else if (grade >= 4.5 && grade < 5.5) {
      console.log(`Very good (${grade.toFixed(2)})`);
    } else {
      console.log(`Excellent (${grade.toFixed(2)})`);
    }
  }
  function readFullName(firstName, lastName) {
    console.log(`${firstName} ${lastName}`);
  }
  function printHeader() {
    console.log("~~~- {@} -~~~");
    console.log("~- Certificate -~");
    console.log("~~~- ~---~ -~~~");
  }
  function pass(grade) {
    return grade >= 3;
  }
}
printCertificate(2, ["Todor", "Stoyanov"]);
