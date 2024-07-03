const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
const [N, ...arr] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const result = [];

arr.forEach((e) => {
  if (e === 0) result.pop(e);
  else result.push(e);
});

const sum = result.reduce((sum, cur) => {
  return sum + cur;
}, 0);

console.log(sum);
