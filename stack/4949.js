const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.trim());

input.pop();

input.forEach((str) => {
  const stack = [];
  let isMatched = true;
  for (let i = 0; i < str.length; i++) {
    const ch = str[i];
    if (ch === "(" || ch === "[") stack.push(ch);
    if (ch === ")" && stack.pop() !== "(") {
      isMatched = false;
      break;
    }
    if (ch === "]" && stack.pop() !== "[") {
      isMatched = false;
      break;
    }
  }
  if (stack[0]) isMatched = false;
  console.log(isMatched ? "yes" : "no");
});
