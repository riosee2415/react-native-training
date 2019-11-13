let years = [2001, 2010, 2015, 2018];
const str = "I love react-native";

for (let year of years) {
  console.log(year);
}

for (let chr of str) {
  console.log(chr);
}

const loop = () => {
  years.map(year => {
    console.log(`mapVersion : ${year}`);
  });
};

loop();
