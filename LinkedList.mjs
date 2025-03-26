class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.count = 0
  }

  insertAt(index, data) {
    if (index < 0 || index > this.count) {
      throw new Error("invalid index")
    }

    const newNode = new Node(data)
    
    if (index === 0) {
      newNode.next = this.head.next
      this.head = newNode;
    } else {
      let currentNode = this.head;
      let count = 0;

      while(count !== index) {
        currentNode = currentNode.next
        count++
      }

      currentNode.next = newNode;
    }

    this.count++;
  }

  insertLast() {

  }

  deleteAt() {

  }

  deleteLast() {

  }
  
  clear() {

  }

  getNodeAt() {

  }
 
  printAll() {
    let currentNode = this.head;

    for(let i = 0; i < this.count; i++) {
      console.log(currentNode.data);
      currentNode = currentNode.next;
    }
  }
}

export default LinkedList