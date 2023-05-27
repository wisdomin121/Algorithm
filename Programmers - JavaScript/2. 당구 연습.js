const getLineLength = (x1, y1, x2, y2) => {
  return Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2);
};

function solution(m, n, startX, startY, balls) {
  const results = [];

  for (let [endX, endY] of balls) {
    const up =
      startX === endX && startY < endY
        ? Infinity
        : getLineLength(startX, startY, endX, 2 * n - endY);
    const down =
      startX === endX && startY > endY ? Infinity : getLineLength(startX, startY, endX, -endY);
    const left =
      startY === endY && startX > endX ? Infinity : getLineLength(startX, startY, -endX, endY);
    const right =
      startY === endY && startX < endX
        ? Infinity
        : getLineLength(startX, startY, 2 * m - endX, endY);

    results.push(Math.min(up, down, left, right));
  }

  return results;
}
