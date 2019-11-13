// Rest Operator

/*
function printYears(years) {
  console.log(arguments);
}
*/

function printYears(...years) {
  console.log(years);
}

printYears(2000, 2001, 2010, 2015, 2018);
