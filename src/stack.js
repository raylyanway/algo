class Stack {
  stack = [];

  isEmpty() {
    return this.stack.length === 0;
  }

  push(value) {
    this.stack.push(value);
    return value;
  }

  pop() {
    return this.stack.pop();
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  print() {
    return this.stack;
  }
}

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
// console.log(stack.print());
// stack.pop();
// console.log(stack.print());
// console.log(stack.peek());

function reverseStr(str = "") {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}

// console.log(reverseStr("Hello Bro"));

function isBalanced(str = "") {
  const stack = new Stack();

  for (let char of str) {
    if ("(<[{".includes(char)) {
      stack.push(char);
    }
    if (matchBracket(char, stack)) {
      stack.pop();
    }
  }
  return stack.isEmpty();
}

function matchBracket(bracket, stack) {
  const peek = stack.peek();
  const a =
    (bracket === ")" && peek === "(") ||
    (bracket === "]" && peek === "[") ||
    (bracket === "}" && peek === "{") ||
    (bracket === ">" && peek === "<");
  return a;
}

console.log(isBalanced("(()"));
console.log(isBalanced("(())"));
console.log(isBalanced("((>)"));
console.log(isBalanced("((<>)"));
console.log(isBalanced("({}[])"));
