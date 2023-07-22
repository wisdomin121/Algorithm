function solution(record) {
  const obj = {};

  for (let i = 0; i < record.length; i++) {
    const splitRecord = record[i].split(' ');

    if (['Enter', 'Change'].includes(splitRecord[0])) {
      obj[splitRecord[1]] = splitRecord[2];
    }
  }

  const result = [];

  for (let i = 0; i < record.length; i++) {
    const splitRecord = record[i].split(' ');

    if (splitRecord[0] === 'Enter') {
      result.push(`${obj[splitRecord[1]]}님이 들어왔습니다.`);
    } else if (splitRecord[0] === 'Leave') {
      result.push(`${obj[splitRecord[1]]}님이 나갔습니다.`);
    }
  }

  return result;
}

console.log(
  solution([
    'Enter uid1234 Muzi',
    'Enter uid4567 Prodo',
    'Leave uid1234',
    'Enter uid1234 Prodo',
    'Change uid4567 Ryan',
  ])
);
// ["Prodo님이 들어왔습니다.", "Ryan님이 들어왔습니다.", "Prodo님이 나갔습니다.", "Prodo님이 들어왔습니다."]
