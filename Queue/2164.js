const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
const n = Number(require("fs").readFileSync(filePath).toString().trim());

const cards = new Array(n).fill().map((e, idx) => idx + 1);
let idx = 0;

while (idx != cards.length - 1) {
  idx++;
  cards.push(cards[idx]);
  idx++;
}

console.log(cards[cards.length - 1]);

/*
⏰ 시간초과
처음에 shift()를 사용해서 문제를 풀었는데 시간초과가 났다..!
pop, push는 시간복잡도가 O(1)이지만 
shift는 맨앞의 요소를 제거하고 모든 요소를 왼쪽으로 이동시키기 때문에 시간복잡도가 O(n)이라고 한다.

✏️ idx를 이용해서 해결
*/

//✅ solution2
//? 연결리스트로 큐를 구현하는 방법

class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.size = 0;
  }

  enqueue(element) {
    const newNode = new Node(element);
    if (this.front === null) {
      this.front = this.rear = newNode;
    } else {
      //기존 마지막 node의 next가 새로운 노드가 됨
      this.rear.next = newNode;
      this.rear = newNode;
    }
    this.size++;
  }

  dequeue() {
    const element = this.front.element;
    this.front = this.front.next;
    this.size--;
    return element;
  }
}

function useLinkedList_Q() {
  const queue = new Queue();

  for (let i = 1; i <= n; i++) {
    queue.enqueue(i);
  }

  while (queue.size > 1) {
    queue.dequeue();
    queue.enqueue(queue.dequeue());
  }

  console.log(queue.rear.element);
}

useLinkedList_Q();
