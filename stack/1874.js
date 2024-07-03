const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
const [N, ...arr] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const seq = new Array(N).fill().map((e, i) => i + 1);
const stack = [];
const result = [];

arr.forEach((e) => {
  if (seq.includes(e)) {
    const addnum = seq.indexOf(e);
    for (let i = 0; i <= addnum; i++) {
      stack.push(seq.shift());
      result.push("+");
    }
    stack.pop();
    result.push("-");
  } else if (stack.includes(e)) {
    if (stack.pop() !== e) {
      result.push("NO");
      return;
    }
    result.push("-");
  }
});

if (stack[0] || seq[0]) result.push("NO");

console.log(result[result.length - 1] === "NO" ? "NO" : result.join("\n"));
