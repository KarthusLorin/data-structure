/**
 * @name: Valid Parentheses(括号匹配)
 * @description: Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

 An input string is valid if:
 1.Open brackets must be closed by the same type of brackets.
 2.Open brackets must be closed in the correct order.

 Note that an empty string is also considered valid.
 */

const map = {
  '(': ')',
  '[': ']',
  '{': '}'
};

const isValid = (s) => {
  let stack = [];
  for (let key of s) {
    if (map[key]) {
      stack.push(map[key])
    } else {
      if (key !== stack.pop()) {
        return false
      }
    }
  }
  return stack.length === 0
};
