// Spread Operator  => ...

let years1 = [2001, 2010, 2015, 2018];
let years2 = [2000, ...years1];

console.log(`years1 => ${years1}`);
console.log(`years2 => ${years2}`);

let korHistory = {
  liberate: 1945,
  625: 1950
};

let history = {
  worldwar1: 1914,
  worldwar2: 1945,
  ...korHistory
};

console.log(history);

let address1 = {
  contury: "South Korea",
  city: "Seoul"
};

let address2 = {
  ...address1,
  contury: "United State"
};

console.log(address2);
