const fs = require('fs');
const filePath = process.platform==='linux' ? '/dev/stdin':'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('');

const solution = (input) => {
  let stack = [];
  let number = { '(': '2', ')': '2', '[': '3', ']': '3' };
  let reverse = { ')': '(', '(': ')', '[': ']', ']': '[' };
  let formula = '';

  for (let i = 0; i < input.length; i++) {
    const now = input[i];
    const next = i === input.length-1 ? 0 : input[i + 1];
    const num = number[now];
    const reverseNow = reverse[now];

    if ((now === '(' && next === ')') || (now === '[' && next === ']')) {
      formula += `${num} + `;
      i++;
    } else if (now === '(' || now === '[') {
      stack.push(now);
      formula += `${num} * ( `;
    } else if (now === ')' || now === ']') {
      if (stack.length === 0 || stack[stack.length - 1] !== reverseNow) {
        formula = '0';
        break;
      }

      if (formula[formula.length - 2] === '+') {
        formula = formula.substring(0, formula.length - 2);
      }
  
      stack.pop();
      formula += ') + ';
    }
  }
  
  if (formula.length >= 3 && formula[formula.length - 2] === '+') {
    formula = formula.substring(0, formula.length - 2);
  }
  if (stack.length > 0) {
    formula = '0';
  }

  return eval(formula);
}

console.log(solution(input));