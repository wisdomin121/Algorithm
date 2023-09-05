// 약 20분

const formatTime = (times) => {
  const timeFrom = times[0].split(':').map(Number);
  const timeTo = times[1].split(':').map(Number);

  return [timeFrom[0] * 60 + timeFrom[1], timeTo[0] * 60 + timeTo[1]];
};

function solution(book_time) {
  for (let i = 0; i < book_time.length; i++) {
    book_time[i] = formatTime(book_time[i]);
  }

  book_time.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];

    return a[0] - b[0];
  });

  const rooms = { 0: book_time[0] };

  outer: for (let i = 1; i < book_time.length; i++) {
    const [from, to] = book_time[i];

    for (let roomNo in rooms) {
      const [roomFrom, roomTo] = rooms[roomNo];

      if (roomTo + 10 <= from) {
        rooms[roomNo] = [from, to];
        continue outer;
      }
    }

    const nextRoomNo = Object.keys(rooms).length;

    rooms[nextRoomNo] = [from, to];
  }

  return Object.keys(rooms).length;
}
