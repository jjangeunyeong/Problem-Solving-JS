const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
const infix = require("fs").readFileSync(filePath).toString().trim().split("");

const stack = [];
let postfix = "";

infix.forEach((ch) => {
  if (ch === "(") stack.push(ch);
  else if (ch === ")") {
    while (stack.length && stack[stack.length - 1] !== "(") {
      postfix += stack.pop();
    }
    stack.pop();
  } else if (ch === "*" || ch === "/") {
    while (
      (stack.length && stack[stack.length - 1] === "*") ||
      stack[stack.length - 1] === "/"
    ) {
      postfix += stack.pop();
    }
    stack.push(ch);
  } else if (ch === "+" || ch === "-") {
    while (stack.length && stack[stack.length - 1] !== "(") {
      postfix += stack.pop();
    }
    stack.push(ch);
  } else {
    postfix += ch;
  }
});

while (stack.length) {
  postfix += stack.pop();
}

console.log(postfix);
