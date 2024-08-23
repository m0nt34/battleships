export const checkIfCanPlace = (x, y, board, ship) => {
  if (x > 9 || x < 0 || y > 9 || y < 0) return false;
  if (ship.horizontal) {
    if (x + ship.shipLength - 1 > 9) return false;
    for (let i = x; i < x + ship.shipLength; i++) {
      if (i > 9 || board[y][i] !== 0) {
        return false;
      }
    }
    return true;
  } else {
    if (y + ship.shipLength - 1 > 9) return false;
    for (let i = y; i < y + ship.shipLength; i++) {
      if (i > 9 || board[i][x] !== 0) {
        return false;
      }
    }
    return true;
  }
};
