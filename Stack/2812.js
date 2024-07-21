const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
const [first, second] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [N, K] = first.split(" ").map(Number);
const num = second.split("").map(Number);

function solution1() {
  const result = [];
  let curIdx = 0;

  for (let i = K; i < N; i++) {
    for (let j = curIdx; j <= i; j++) {
      if (num[curIdx] < num[j]) {
        curIdx = j;
      }
    }
    result.push(num[curIdx++]);
  }

  console.log(result.join(""));
}

/* 
⏰ 시간
solution1: 4456ms
solution2: 236ms
*/

function solution2() {
  let stack = [];
  let cnt = K; //지워야 하는 숫자의 개수

  for (let i = 0; i < N; i++) {
    while (cnt > 0 && stack[stack.length - 1] < num[i]) {
      stack.pop();
      cnt--;
    }
    stack.push(num[i]);
  }

  while (cnt > 0) {
    stack.pop();
    cnt--;
  }

  console.log(stack.join(""));
}

solution1();
solution2();
