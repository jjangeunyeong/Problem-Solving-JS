const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
const [N, ...arr] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const stack = [];
const result = [];

arr.forEach((e) => {
  const [command, num] = e.split(" ").map((e) => e.trim());
  if (command === "push") stack.push(num);
  else if (command === "pop") result.push(stack.pop() || -1);
  else if (command === "size") result.push(stack.length);
  else if (command === "empty") result.push(stack.length > 0 ? 0 : 1);
  else if (command === "top") result.push(stack[stack.length - 1] || -1);
});

console.log(result.join("\n"));

/*
💢 \r 개행문자 제거 때문에 내 pc에서는 결과가 맞게 나오는데 백준에서는 계속 틀렸다고 나오는 문제가 있었다..!

내pc에서 콘솔창에 출력을 했을 때 추가되는 \r을 삭제하기 위해서 
.split("\r\n")으로 \r을 제거해주고 있었는데 백준에서는 통과가 되지 않았다.

✏️ 해결 ✏️
.trim()으로 공백을 제거해줬더니 백준과 내pc 모두 동일한 결과를 얻을 수 있었다

*/
