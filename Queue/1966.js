const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
const [t_num, ...testcase] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const result = [];
for (let i = 0; i < testcase.length; i += 2) {
  const sortDocs = [];
  const queue = [];
  const [N, M] = testcase[i].split(" ").map(Number);
  const docs = testcase[i + 1].split(" ").map(Number);

  for (let j = 0; j < N; j++) {
    sortDocs.push([j, docs[j]]);
  }

  docs.sort((a, b) => b - a);

  while (sortDocs.length) {
    if (Math.max(...docs) === sortDocs[0][1]) {
      if (sortDocs[0][0] === M) {
        result.push(queue.length + 1);
        break;
      }
      queue.push(sortDocs.shift());
      docs.shift();
    } else {
      sortDocs.push(sortDocs.shift());
    }
  }
}

console.log(result.join("\n"));
