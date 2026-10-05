class MinStack {
  constructor() {
    this.stack = [];
    this.min = Number.MAX_SAFE_INTEGER;
  }

  /**
   * @param {number} val
   * @return {void}
   */
  push(val) {
    if (this.stack.length === 0) {
      this.min = val;
      this.stack.push(0);
    } else {
      this.stack.push(val - this.min);
      this.min = Math.min(this.min, val);
    }
  }

  /**
   * @return {void}
   */
  pop() {
    if (this.stack.length === 0) return;
    const pop = this.stack.pop();
    if (pop < 0) {
      this.min -= pop;
    }
  }

  /**
   * @return {number}
   */
  top() {
    const top = this.stack[this.stack.length - 1];
    return top > 0 ? this.min + top : this.min;
  }

  /**
   * @return {number}
   */
  getMin() {
    return this.min;
  }
}
