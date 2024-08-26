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
    if (checkIfShipSank(x, y, newGuessBoard[x][y], newGuessBoard))
      if (checkIfWin(newGuessBoard))
        return { sameGuess: false, hit: true, win: true };
    return { sameGuess: false, hit: true, win: false };
  } else {
    newGuessBoard[x][y] = -1;
    setMyGuessBoard(newGuessBoard);
    return { sameGuess: false, hit: false, win: false };
  }
};

const checkIfShipSank = (x, y, length, myGuessBoard) => {
  const directions = [
    [1, 1],
    [-1, 1],
    [1, -1],
    [-1, -1],
  ];
  for (let i = 0; i < directions.length; i++) {
    for (let j = 0; j < length; j++) {
      myGuessBoard[x + directions[i][0] * j][y + directions[i][1] * j];
    }
  }
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
