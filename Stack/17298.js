const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
const [N, seq] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const arr = seq.split(" ").map(Number);
const stack = [];
const result = Array(arr.length).fill(-1);

arr.forEach((e, idx) => {
  while (stack.length && arr[stack[stack.length - 1]] < e) {
    result[stack.pop()] = e;
  }
  stack.push(idx);
});

console.log(result.join(" "));

/*
❔처음에 단순하게 이중 반복문을 돌려 시간초과가 났다.   
수열 A의 크기 N (1 ≤ N ≤ 1,000,000)이기 때문

stack을 하나 만들어서 idx를 넣어주면서    
오큰수가 존재하는 경우에(stack젤 위에 있는 것보다 e가 더 큰 경우) result[idx]에 오큰수를 넣어준다.
*/
