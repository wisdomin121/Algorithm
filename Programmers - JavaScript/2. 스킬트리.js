// 18분 25초

function solution(skill, skill_trees) {
  let result = 0;

  for (let skillTree of skill_trees) {
    let temp = [];

    for (let s of skillTree) {
      if (skill.includes(s)) temp.push(s);
    }

    if (skill.startsWith(temp.join(''))) result++;
  }

  return result;
}
