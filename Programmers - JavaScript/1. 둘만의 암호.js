function solution(s, skip, index) {
  const result = [];

  for (let i = 0; i < s.length; i++) {
    let originalNum = s[i].charCodeAt();
    let codeNum = originalNum;
    let idx = index;

    while (idx !== 0) {
      codeNum++;

      if (codeNum === 123) codeNum = 97;

      if (!skip.includes(String.fromCharCode(codeNum))) {
        idx--;
      }
    }

    result.push(String.fromCharCode(codeNum));
  }

  return result.join('');
}
