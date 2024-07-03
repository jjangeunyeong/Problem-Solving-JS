const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
const [N, ...arr] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

arr.forEach((ps) => {
  const stack = [];
  let isVPS = true;
  for (let i = 0; i < ps.length; i++) {
    if (ps[i] === "(") stack.push("(");
    if (ps[i] === ")") {
      if (stack.length <= 0) {
        isVPS = false;
        break;
      } else stack.pop();
    }
  }
  if (stack.length > 0) isVPS = false;

  console.log(isVPS ? "YES" : "NO");
});
