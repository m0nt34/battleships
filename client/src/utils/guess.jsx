import { useMyGuessBoard } from "../store/useMyGueses";
import { useOpponentBoard } from "../store/useOpponentShipPosition";

export const guess = (x, y) => {
  const { OpBoard } = useOpponentBoard.getState();
  const { setMyGuessBoard, myGuessBoard } = useMyGuessBoard.getState();
  var newGuessBoard = myGuessBoard.map((row) => [...row]);
  if (myGuessBoard[x][y] > 0 || myGuessBoard[x][y] < 0)
    return { sameGuess: true, hit: false, win: false };
  if (OpBoard[x][y] >= 1) {
    newGuessBoard[x][y] = OpBoard[x][y];
    setMyGuessBoard(newGuessBoard);
    const { shipSank, startC, endC, length } = checkIfShipSank(
      x,
      y,
      newGuessBoard[x][y],
      newGuessBoard
    );
    if (shipSank) {
      const newBoard = placeShipsBorders(startC, endC, newGuessBoard, length);
      setMyGuessBoard(newBoard);
    }
    if (checkIfWin(newGuessBoard))
      return { sameGuess: false, hit: true, win: true };
    return { sameGuess: false, hit: true, win: false };
  } else {
    newGuessBoard[x][y] = -1;
    setMyGuessBoard(newGuessBoard);
    return { sameGuess: false, hit: false, win: false };
  }
};

const placeShipsBorders = (startC, endC, newBoard, length) => {
  const x = startC[1];
  const y = startC[0];
  const xx = endC[1];
  const yy = endC[0];
  if (xx >= x && y === yy) {
    for (let i = x - 1; i <= x + length; i++) {
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
    if (x + length < newBoard[0].length) {
      newBoard[y][x + length] -= 1;
    }
    return newBoard;
  } else {
    for (let i = y - 1; i <= y + length; i++) {
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

    if (y + length < newBoard.length && x >= 0 && x < newBoard[0].length) {
      newBoard[y + length][x] -= 1;
    }

    return newBoard;
  }
};

const checkIfShipSank = (x, y, length, myGuessBoard) => {
  const directions = [
    [
      [-1, 0],
      [1, 0],
    ],
    [
      [0, -1],
      [0, 1],
    ],
  ];
  var count = 1;
  if (count === length)
    return {
      shipSank: true,
      startC: [x, y],
      endC: [x, y],
      length: myGuessBoard[x][y],
    };

  for (let i = 0; i < 2; i++) {
    var jj = 0;
    var jj2 = 0;
    for (let j = 1; j < length; j++) {
      if (
        x + directions[i][0][0] * j > 9 ||
        x + directions[i][0][0] * j < 0 ||
        y + directions[i][0][1] * j > 9 ||
        y + directions[i][0][1] * j < 0 ||
        myGuessBoard[x + directions[i][0][0] * j][
          y + directions[i][0][1] * j
        ] <= 0
      ) {
        break;
      }
      jj++;
      count++;
    }
    if (count === length)
      return {
        shipSank: true,
        startC: [x + directions[i][0][0] * jj, y + directions[i][0][1] * jj],
        endC: [x, y],
        length: myGuessBoard[x][y],
      };
    for (let j = 1; j < length; j++) {
      if (
        x + directions[i][1][0] * j > 9 ||
        x + directions[i][1][0] * j < 0 ||
        y + directions[i][1][1] * j > 9 ||
        y + directions[i][1][1] * j < 0 ||
        myGuessBoard[x + directions[i][1][0] * j][
          y + directions[i][1][1] * j
        ] <= 0
      ) {
        break;
      }
      jj2++;
      count++;
    }
    if (count === length)
      return {
        shipSank: true,
        startC: [x + directions[i][0][0] * jj, y + directions[i][0][1] * jj],
        endC: [x + directions[i][1][0] * jj2, y + directions[i][1][1] * jj2],
        length: myGuessBoard[x][y],
      };
  }
  return {
    shipSank: false,
    startC: [0, 0],
    endC: [0, 0],
    length: myGuessBoard[x][y],
  };
};
const checkIfWin = (myGuessBoard) => {
  var RightGuessCout = 0;
  myGuessBoard.forEach((column) => {
    column.forEach((row) => {
      if (row >= 1) RightGuessCout++;
    });
  });
  return RightGuessCout === 20;
};
