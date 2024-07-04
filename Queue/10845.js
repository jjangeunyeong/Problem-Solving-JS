const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
const [n, ...arr] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const queue = [];
const result = [];
arr.forEach((e) => {
  const [command, x] = e.trim().split(" ");

  if (command === "push") queue.push(x);
  else if (command === "pop") result.push(queue.length ? queue.shift() : -1);
  else if (command === "size") result.push(queue.length);
  else if (command === "empty") result.push(queue.length ? 0 : 1);
  else if (command === "front") result.push(queue.length ? queue[0] : -1);
  else if (command === "back")
    result.push(queue.length ? queue[queue.length - 1] : -1);
});

console.log(result.join("\n"));

/*
처음에 일일이 console.log를 찍어줬더니 ⏰시간초과⏰가 되었음..
result 배열에 저장해서 한번에 출력하여 해결 !
*/
