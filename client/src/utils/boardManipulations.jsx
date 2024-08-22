export const placeShip = (x, y, board, ship) => {
  var newBoard = board.map((row) => [...row]);
  if (ship.horizontal) {
    for (let i = x; i < x + ship.shipLength; i++) {
      newBoard[y][i] = ship.shipLength;
    }

    for (let i = x - 1; i <= x + ship.shipLength; i++) {
      if (y + 1 < newBoard.length && i >= 0 && i < newBoard[0].length) {
        newBoard[y + 1][i] -= 1;
      }
      if (y - 1 >= 0 && i >= 0 && i < newBoard[0].length) {
        newBoard[y - 1][i] -= 1;
      }
    }
    if (x - 1 >= 0 && x - 1 < newBoard[0].length) {
      newBoard[y][x - 1] -= 1;
    }
    if (x + ship.shipLength < newBoard[0].length) {
      newBoard[y][x + ship.shipLength] -= 1;
    }
    return newBoard;
  } else {
    for (let i = y; i < y + ship.shipLength; i++) {
      newBoard[i][x] = ship.shipLength;
    }
    for (let i = y - 1; i <= y + ship.shipLength; i++) {
      if (i >= 0 && i < newBoard.length && x + 1 < newBoard[0].length) {
        newBoard[i][x + 1] -= 1;
      }

      if (i >= 0 && i < newBoard.length && x - 1 >= 0) {
        newBoard[i][x - 1] -= 1;
      }
    }

    if (y - 1 >= 0 && x >= 0 && x < newBoard[0].length) {
      newBoard[y - 1][x] -= 1;
    }

    if (
      y + ship.shipLength < newBoard.length &&
      x >= 0 &&
      x < newBoard[0].length
    ) {
      newBoard[y + ship.shipLength][x] -= 1;
    }

    return newBoard;
  }
};

export const pickupShip = (x, y, board, ship) => {
  var newBoard = board.map((row) => [...row]);
  if (ship.horizontal) {
    for (let i = x; i < x + ship.shipLength; i++) {
      newBoard[y][i] = 0;
    }

    for (let i = x - 1; i <= x + ship.shipLength; i++) {
      if (y + 1 < newBoard.length && i >= 0 && i < newBoard[0].length) {
        newBoard[y + 1][i] += 1;
      }
      if (y - 1 >= 0 && i >= 0 && i < newBoard[0].length) {
        newBoard[y - 1][i] += 1;
      }
    }
    if (x - 1 >= 0 && x - 1 < newBoard[0].length) {
      newBoard[y][x - 1] += 1;
    }
    if (x + ship.shipLength < newBoard[0].length) {
      newBoard[y][x + ship.shipLength] += 1;
    }
    return newBoard;
  } else {
    for (let i = y; i < y + ship.shipLength; i++) {
      newBoard[i][x] = 0;
    }
    for (let i = y - 1; i <= y + ship.shipLength; i++) {
      if (i >= 0 && i < newBoard.length && x + 1 < newBoard[0].length) {
        newBoard[i][x + 1] += 1;
      }

      if (i >= 0 && i < newBoard.length && x - 1 >= 0) {
        newBoard[i][x - 1] += 1;
      }
    }

    if (y - 1 >= 0 && x >= 0 && x < newBoard[0].length) {
      newBoard[y - 1][x] += 1;
    }

    if (
      y + ship.shipLength < newBoard.length &&
      x >= 0 &&
      x < newBoard[0].length
    ) {
      newBoard[y + ship.shipLength][x] += 1;
    }

    return newBoard;
  }
};
