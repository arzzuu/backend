const fs = require('fs');

fs.readFile('./data.json', 'utf8', (err, data) => {
  if (!err) {
    console.log(data);
  } else {
    console.error(err);
  }
  let str = JSON.parse(data);
  let sum = 0;
  str.forEach(element => {
    sum += element.age;
  });
  let arithmetic = sum / str.length;
  let a = arithmetic.toString();
  console.log(arithmetic);
  fs.writeFileSync('result.txt', a);
});
