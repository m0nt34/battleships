import { useShips } from "../store/useShips";

export const placeShip = (i, j, board, ship, calculateStartX) => {
  if (i > 9 || i < 0 || j > 9 || j < 0) return false;
  const { updateNestedShipById } = useShips.getState();
  let newBoard = board;

  if (ship.horizontal) {
    var startX;
    if (calculateStartX) {
      startX = j - (ship.left - 1);
    } else {
      startX = j;
    }

    const endX = startX + parseInt(ship.id[0]) - 1;

    if (startX < 0 || endX > 9 || ship.id === "") {
      return false;
    }

    for (let k = startX; k <= endX; k++) {
      if (newBoard[i][k] === undefined || newBoard[i][k] !== 0) return false;
    }
    for (let k = startX; k <= endX; k++) {
      newBoard[i][k] = parseInt(ship.id[0]);
    }
    for (let k = startX - 1; k <= endX + 1; k++) {
      if (newBoard[i + 1] && newBoard[i + 1][k] !== undefined) {
        newBoard[i + 1][k] -= 1;
      }
      if (newBoard[i - 1] && newBoard[i - 1][k] !== undefined) {
        newBoard[i - 1][k] -= 1;
      }
    }
    if (newBoard[i][startX - 1] !== undefined) {
      newBoard[i][startX - 1] -= 1;
    }
    if (newBoard[i][endX + 1] !== undefined) {
      newBoard[i][endX + 1] -= 1;
    }
    const updatedShip = {
      id: ship.id,
      shipLength: parseInt(ship.id[0]),
      horizontal: ship.horizontal,
      inGame: true,
      left: startX,
      top: i,
    };
    updateNestedShipById(ship.id, updatedShip);
    return newBoard;
  } else {
  }
};

export const calculateCooridnates = (e, top, left) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  const relativeX = Math.floor((mouseX - left) / 34);
  const relativeY = Math.floor((mouseY - top) / 34);
  return { relativeX, relativeY };
};
export const pickupShip = (board, left, top, shipLength, horizontal) => {
  let newBoard = board;
  if (horizontal) {
    for (let i = left; i < left + shipLength; i++) {
      newBoard[top][i] = 0;
    }
    for (let i = left - 1; i <= left + shipLength; i++) {
      if (newBoard[top + 1] && newBoard[top + 1][i] !== undefined) {
        newBoard[top + 1][i] += 1;
      }
      if (newBoard[top - 1] && newBoard[top - 1][i] !== undefined) {
        newBoard[top - 1][i] += 1;
      }
    }
    if (newBoard[top][left - 1] && newBoard[top][left - 1] !== undefined) {
      newBoard[top][left - 1] += 1;
    }
    if (
      newBoard[top][left + shipLength] &&
      newBoard[top][left + shipLength] !== undefined
    ) {
      newBoard[top][left + shipLength] += 1;
    }

    return newBoard;
  } else {
  }
};
