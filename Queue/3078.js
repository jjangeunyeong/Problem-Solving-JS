const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
let [num, ...testcase] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [N, K] = num.split(" ").map(Number);
testcase = testcase.map((e) => e.trim());

//? 이름 글자의 길이:K가 2-20글자로 주어지기 때문에 이름의 길이가 같은 친구쌍을 저장할 수 있는 q 20r개를 생성해준다.
const q = Array.from(Array(21), () => new Array());
let result = 0;

testcase.forEach((e, i) => {
  const len = e.length;

  while (q[len].length > 0 && i - q[len][0] > K) q[len].shift();

  result += q[len].length;
  q[len].push(i);

  //console.log(q, result);
});

console.log(result);

/*=======================================================================================*/
// ⏰ 시간초과
function solution1() {
  let result = 0;

  for (let i = 0; i < testcase.length - 1; i++) {
    let rep = K;
    let n = 0;
    if (K > testcase.length - 1 - i) rep = testcase.length - 1 - i;

    while (n < rep) {
      //console.log(i, i + n + 1, testcase.length - 1);
      if (
        i + n + 1 <= testcase.length - 1 &&
        testcase[i].length === testcase[i + 1 + n].length
      ) {
        result++;
      }
      n++;
      //console.log(result);
    }
  }
  console.log(result);
}
solution1();
