import { useBoard } from "../store/useBoard";
import { useOpGuessBoard } from "../store/useOpGuessBoard";

export const opponentGuess = (x, y) => {
  const { board } = useBoard.getState();
  const { setOpGuessBoard, opGuessBoard } = useOpGuessBoard.getState();
  var newGuessBoard = opGuessBoard.map((row) => [...row]);
  if (board[x][y] >= 1) {
    newGuessBoard[x][y] = board[x][y];
    setOpGuessBoard(newGuessBoard);
    if (checkIfLose(newGuessBoard)) return true;
    return false;
  } else {
    newGuessBoard[x][y] = -1;
    setOpGuessBoard(newGuessBoard);
    return false;
  }
};
const checkIfLose = (myGuessBoard) => {
  var RightGuessCout = 0;
  myGuessBoard.forEach((column) => {
    column.forEach((row) => {
      if (row >= 1) RightGuessCout++;
    });
  });
  return RightGuessCout === 20;
};
