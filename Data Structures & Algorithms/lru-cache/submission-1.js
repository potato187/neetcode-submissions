var LinkedNode = function (key, value, next, prev) {
  this.value = value ?? null;
  this.key = key ?? null;
  this.next = next ?? null;
  this.prev = prev ?? null;
}

// @lc code=start
/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.size = 0;
  this.cached = new Map();
  this.head = new LinkedNode();
  this.tail = new LinkedNode();
  this.head.next = this.tail;
  this.tail.prev = this.head;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  const node = this.cached.get(key);
  let value = node?.value ?? -1;

  if (node) {
    value = node.value;
    this.addToHead(key, value);
    this.removeNode(node);
  }

  return value;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.cached.has(key)) {
    const node = this.cached.get(key);
    this.removeNode(node);
    this.addToHead(key, value);
  } else {
    this.addToHead(key, value);
    this.size++;
    if (this.size > this.capacity) {
      const prevTail = this.tail.prev;
      this.removeNode(prevTail);
      this.cached.delete(prevTail.key);
      this.size--;
    }
  }
};

LRUCache.prototype.addToHead = function (key, value) {
  const node = new LinkedNode(key, value);
  this.cached.set(key, node);

  node.prev = this.head;
  node.next = this.head.next;
  this.head.next.prev = node;

  this.head.next = node;

  return node;
}

LRUCache.prototype.addToEnd = function (key, value) {
  const node = new LinkedNode(key, value);
  this.cached.set(key, node);

  this.tail.prev.next = node;
  node.prev = this.tail.prev;
  node.next = this.tail;
  this.tail.prev = node;

  return node;
}


LRUCache.prototype.removeNode = function (node) {
  if (!node) return;
  node.prev.next = node.next;
  node.next.prev = node.prev;
}