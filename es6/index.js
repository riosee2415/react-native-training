// Arrow Function

const years = [
  {
    year: 2001,
    data: "크리스마스"
  },
  {
    year: 2001,
    data: "롤리팝"
  },
  {
    year: 2010,
    data: "안드로이드"
  },
  {
    year: 2015,
    data: "리엑트네이티브"
  },
  {
    year: 2018,
    data: "개발자"
  }
];

// past
const result = years.filter(function(data) {
  return data.year > 2008;
});

// console.log(result);

const allowResult = years.filter(data => data.year > 2000);

console.log(allowResult);
