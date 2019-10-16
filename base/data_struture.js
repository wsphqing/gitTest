/**
 * @description 栈
 * @characteristic 先进后出(last in first out)
 */
function Stack() {
  let count = 0;
  let storage = {};

  // 将一个元素堆入栈顶
  this.push = function (value) {
    storage[count] = value;
    count++;
  }

  // 移除栈顶元素，并返回被移除的元素
  this.pop = function () {
    if (count === 0) {
      return undefined;
    }
    // 因为数组长度和位置差1，所以先减1
    count--;
    var result = storage[count];
    delete storage[count];
    return result;
  }

  // 返回栈顶元素
  this.peek = function () {
    return storage[count - 1];
  }

  // 返回栈中元素的个数
  this.size = function () {
    return count;
  }
}

/**
 * @description 队列
 * @characteristic 先进先出
 */
function Queue() {
  let collection = [];

  this.print = function () {
    console.log(collection);
  }

  // 入列，向队尾部增加一个元素
  this.enqueue = function (element) {
    collection.push(element);
  }

  // 出列，移出队列头部的一个元素，并返回被移除元素
  this.dequeue = function () {
    return collection.shift();
  }

  // 获取队列第一个元素
  this.front = function () {
    return collection[0];
  }

  // 判断队列是否为空
  this.isEmpty = function () {
    return collection.length === 0;
  }

  // 队列中元素个数
  this.size = function () {
    return collection.length;
  }
}

/**
 * @description 优先队列
 * @characteristic 为每个元素赋予优先级，优先级高的元素入列时将排到低优先级元素之前
 */
function PriorityQueue() {
  let collection = [];

  this.print = function () {
    console.log(collection);
  }

  // 入列，向队尾部增加一个元素
  this.enqueue = function (element) {
    if (this.isEmpty()) {
      collection.push(element);
    } else {
      var added = false;
      for (let i = 0; i < collection.length; i++) {
        if (element.level < collection[i].level) {
          collection.splice(i, 0, element);
          added = true;
          break;
        }
      }
      if (!added) {
        collection.push(element);
      }
    }
  }

  // 出列，移出队列头部的一个元素，并返回被移除元素
  this.dequeue = function () {
    return collection.shift();
  }

  // 获取队列第一个元素
  this.front = function () {
    return collection[0];
  }

  // 判断队列是否为空
  this.isEmpty = function () {
    return collection.length === 0;
  }

  // 队列中元素个数
  this.size = function () {
    return collection.length;
  }
}

// var pQ = new PriorityQueue();

// pQ.enqueue({name: 'hua0', level: 3});
// pQ.enqueue({name: 'hua1', level: 1});
// pQ.enqueue({name: 'hua2', level: 4});
// pQ.enqueue({name: 'hua3', level: 2});
// pQ.enqueue({name: 'hua4'});

// pQ.print();

/**
 * @description 链表(Linked List)
 * @characteristic 1.链表是一种链式数据结构
 * @characteristic 2.链上的每个节点信息包含两种信息：节点本身的数据和指向下一个节点的指针
 * @characteristic 3.链表和传统的数组都是线性的数据结构，存储的都是一个序列的数据
 */
/** 链表中的节点 */
function Node(element) {
  // 节点中的数据
  this.element = element;
  // 指向下一个节点的指针
  this.next = null;
}

/** 链表 */
function LinkedList() {
  let length = 0;
  let head = null;

  // 链表中节点数
  this.size = function () {
    return length;
  }

  // 链表中的头部元素
  this.head = function () {
    return head;
  }

  // 项链表尾部添加一个节点
  this.add = function (element) {
    let node = new Node(element);

    if (head === null) {
      head = node;
    } else {
      let currentNode = head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
    }

    length++;
  }

  // 删除某个节点
  this.remove = function (element) {
    let currentNode = head;
    var previousNode;

    if (currentNode.element === element) {
      head = currentNode.next;
    } else {
      while (currentNode.element !== element) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      previousNode.next = currentNode.next;
    }

    length--;
  }

  // 判断链表是否为空
  this.isEmpty = function () {
    return length === 0;
  }

  // 返回某个节点的index
  this.indexOf = function (element) {
    let currentNode = head;
    let index = -1;
    while (currentNode) {
      index++;
      if (currentNode.element === element) {
        return index;
      }
      currentNode = currentNode.next;
    }
    return index;
  }

  // 查找某个index处的节点
  this.elementAt = function (index) {
    let currentNode = head;
    let count = 0;

    while (count < index) {
      count++;
      currentNode = currentNode.next;
    }
    return currentNode.element;
  }

  // 在某个index处插入一个节点
  this.addAt = function (index, element) {
    let node = new Node(element);
    let currentNode = head;
    let previousNode;
    let currentIndex = 0;

    if (index > length) {
      return false;
    }

    if (index === 0) {
      node.next = currentNode;
      head = node;
    } else {
      while (currentIndex < index) {
        currentIndex++;
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      node.next = currentNode;
      previousNode.next = node;
    }

    length++;
  }

  // 删除某个index处的节点
  this.removeAt = function (index) {
    let currentNode = head;
    let previousNode;
    let currentIndex = 0;

    if (index < 0 || index >= length) {
      return null
    }

    if (index === 0) {
      head = currentIndex.next;
    } else {
      while (currentIndex < index) {
        currentIndex++;
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      previousNode.next = currentNode.next;
    }

    length--;
    return currentNode.element;
  }

  this.print = function () {
    console.log(head);
  }
}

// var list = new LinkedList();

// list.add({name: 'hua0', level: 3});
// list.add({name: 'hua1', level: 3});
// list.add({name: 'hua2', level: 3});
// list.add({name: 'hua3', level: 3});

// list.print();

/**
 * @description 集合(set)
 * @characteristic 集合是数学中的一个基本概念，表示具有某种特性的对象汇总成的集体
 * @characteristic 集合中不允许出现重复的元素，且是无序的
 */
function MySet() {
  let collection = [];

  // 集合中所有元素
  this.values = function () {
    return collection;
  }

  // 集合中元素个数
  this.size = function () {
    return collection.length;
  }

  // 判断集合中是否存在某个元素
  this.has = function (element) {
    return (collection.indexOf(element) !== -1);
  }

  // 向集合中添加元素
  this.add = function (element) {
    if (!this.has(element)) {
      collection.push(element);
      return true;
    }
    return false;
  }

  // 从集合中移出某个元素
  this.remove = function (element) {
    if (this.has(element)) {
      let index = collection.indexOf(element);
      collection.splice(index, 1);
      return true;
    }
    return false;
  }

  // 返回两个集合的并集
  this.union = function (otherSet) {
    let unionSet = new MySet();
    let firstSet = this.values();
    let secondSet = otherSet.values();

    firstSet.forEach(element => {
      unionSet.add(element);
    });

    secondSet.forEach(element => {
      unionSet.add(element);
    })

    return unionSet;
  }

  // 两个集合的交集
  this.intersection = function (otherSet) {
    let intersectionSet = new MySet();
    let firstSet = this.values();

    firstSet.forEach(element => {
      if (otherSet.has(element)) {
        intersectionSet.add(element);
      }
    });

    return intersectionSet;
  }

  // 两个集合的差集
  this.difference = function (otherSet) {
    let differenceSet = new MySet();
    let firstSet = this.values();

    firstSet.forEach(element => {
      if (!otherSet.has(element)) {
        differenceSet.add(element);
      }
    });

    return differenceSet;
  }

  // 判断一个集合是否是另一个集合的子集
  this.subset = function (otherSet) {
    let firstSet = this.values();
    return firstSet.every(element => {
      return otherSet.has(element);
    })
  }
}

/**
 * @description 哈希表/散列表(Hash Table)
 * @characteristic Hash Table 是一种用于存储键值对(key value pair)的数据结构
 */
function hash(string, max) {
  let hash = 0;
  for (let i = 0; i < string.length; i++) {
    hash += string.charCodeAt(i);
  }

  return hash % max;
}

function HashTable() {
  let storage = [];
  const storageLimit = 4;

  // 增加一组键值对
  this.add = function (key, value) {
    let index = hash(key, storageLimit);

    if (storage[index] === undefined) {
      storage[index] = [
        [key, value]
      ]
    } else {
      let inserted = false;
      for (let i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === key) {
          storage[index][i][1] = value;
          inserted = true;
        }
      }

      if (!inserted) {
        storage[index].push([key, value]);
      }
    }
  }

  // 删除一组键值对
  this.remove = function (key) {
    let index = hash(key, storageLimit);
    if (storage[index].length === 1 && storage[index][0][0] === key) {
      delete storage[index];
    } else {
      for (let i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === key) {
          delete storage[index][i];
        }
      }
    }
  }

  // 查找一个键对应的值
  this.lookup = function (key) {
    let index = hash(key, storageLimit);

    if (storage[index]) {
      return undefined;
    } else {
      for (let i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === key) {
          return storage[index][i][1];
        }
      }

      return undefined;
    }
  }
}

/**
 * @description 树(Tree)
 * @characteristic Tree是一种多层数据结构，与Array、Stack、Queue相比是一种非线性的数据结构，在进行插入和搜索操作时很高效
 */

/** 链表中的节点 */
function Node(element) {
  // 节点中的数据
  this.element = element;
  // 二叉
  this.left = null;
  this.right = null;
}

/** 二叉树 */

function BST() {
  this.root = null;

  // 向树种插入一个节点
  this.add = function (element) {
    const currentNode = this.root;

    if (currentNode === null) {
      this.root = new Node(element);
      return;
    } else {
      // 递归查找位置存储
      const searchTree = function (node) {
        if (element < node.element) {
          if (node.left === null) {
            node.left = new Node(element);
          } else {
            return searchTree(node.left);
          }
        } else if (element > node.element) {
          if (node.right === null) {
            node.right = new Node(element);
          } else {
            return searchTree(node.right);
          }
        } else {
          return null
        }
      }

      return searchTree(currentNode);
    }
  }

  // 查找树中最小点
  this.findMin = function () {
    let currentNode = this.root;
    while (currentNode.left !== null) {
      currentNode = currentNode.left;
    }
    return currentNode.element;
  }

  // 查找树中最大点
  this.findMax = function () {
    let currentNode = this.root;
    while (currentNode.right !== null) {
      currentNode = currentNode.right;
    }
    return currentNode.element;
  }

  // 查找树中某个节点
  this.find = function (element) {
    let currentNode = this.root;
    while (currentNode && currentNode.element !== element) {
      currentNode = element < currentNode.element ? currentNode.left : currentNode.right;
    }
    return currentNode;
  }

  // 判断某个节点在树种是否存在
  this.isPresent = function (element) {
    return this.find(element) ? true : false;
    // let currentNode = this.root;
    // while (currentNode) {
    //   if (element === currentNode.element) return true;
    //   currentNode = element < currentNode.element ? currentNode.left : currentNode.right;
    // }
    // return false;
  }

  // 删除树种的某个节点
  this.remove = function (element) {
    const removeNode = function (node, element) {
      if (!node) return null;
      if (element === node.element) {
        // 没有子节点
        if (node.left === null && node.right === null) {
          return null;
        }
        // 没有左侧子节点
        if (node.left === null) {
          return node.right;
        }
        // 没有右侧子节点
        if (node.right === null) {
          return node.left;
        }

        // 有两个子节点
        // 1.找到右侧最小值，赋值当前节点
        // 2.删除右侧最小值，获得右侧新树
        // 3.同理使用左侧最大值也可以
        let tempNode = node.right;
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }
        node.element = tempNode.element;
        node.right = removeNode(node.right, tempNode.element);
        return node;
      } else if (element < node.element) {
        node.left = removeNode(node.left);
        return node;
      } else {
        node.right = removeNode(node.right);
        return node;
      }
    }

    this.root = removeNode(this.root, element);
  }

  this.print = function () {
    console.log(this.root);
  }
}

// const bst = new BST();
// bst.add(4);
// bst.add(2);
// bst.add(6);
// bst.add(1);
// bst.add(3);
// bst.add(5);
// bst.add(7);
// bst.remove(4);
// console.log(bst.findMin());
// console.log(bst.findMax());
// bst.remove(7);
// console.log(bst.findMax());
// console.log(bst.find(4));

// bst.print();

/**
 * @description 字典树(Tire)
 * @characteristic Tire也叫Prefix Tree(前缀树)，也是一种搜索树
 * @characteristic Tire分步骤存储数据，树种每个节点代表一个步骤，常用于存储单词，以便快速查找
 */

/** 字典树中的节点 */
function Node() {
  this.keys = new Map();
  this.end = false;
  this.setEnd = function () {
    this.end = true;
  }
  this.isEnd = function () {
    return this.end;
  }
}

function Trie () {
  this.root = new Node();

  // 字典中添加一个单词
  this.add = function (word, node = this.root) {
    if (word.length === 0) {
      node.setEnd();
      return;
    } else if (!node.keys.has(word[0])) {
      node.keys.set(word[0], new Node());
      return this.add(word.substr(1), node.keys.get(word[0]));
    } else {
      return this.add(word.substr(1), node.keys.get(word[0]));
    }
  }

  // 判断字典树中是否包含某个单词
  this.isWord = function (word) {
    let node = this.root;
    while (word.length) {
      if (!node.keys.has(word[0])) {
        return false;
      } else {
        node = node.keys.get(word[0]);
        word = word.substr(1);
      }
    }
    
    return (node.keys.has(word) && node.keys.get(word).isEnd());
  }

  // 字典树中所有单词
  this.print = function () {
    let words = new Array();
    const search = function (string, node = this.root) {
      if (node.keys.size !== 0) {
        for (let letter of node.keys.keys()) {
          search(string.concat(letter), node.keys.get(letter));
        }

        if (node.isEnd()) {
          words.push(string);
        }
      } else {
        string.length > 0 ? words.push(string) : undefined;
        return;
      }
    }

    search(new String(), this.root);
    console.log(JSON.stringify(this.root), this.root);
    return words.length > 0 ? words : null;
  }
}

let trie = new Trie();
trie.add('d');
trie.add('qing');
trie.add('');
console.log(trie.print());