import { useShips } from "../store/useShips";
import { matrix } from "./getMatrix";
import { checkIfCanPlace } from "./checkIfCanPlaceShip";
import { placeShip } from "./boardManipulations";
import { useBoard } from "../store/useBoard";
import { checkShipsOnBoard } from "./CheckShipsOnBoard";
const randomNum = (x) => Math.floor(Math.random() * x);

export const randomize = async () => {
  var newBoard = matrix(10);
  const { setBoard } = useBoard.getState();
  const { ships, updateNestedShipById } = useShips.getState();
  const flatShips = ships.flatMap((groups) => groups.ships);

  flatShips.forEach((ship) => {
    var x = -1,
      y = -1;
    var updatedShip = {
      id: ship.id,
      shipLength: ship.shipLength,
      horizontal: randomNum(2) === 1,
      inGame: true,
      left: -1,
      top: -1,
    };
    do {
      x = randomNum(10);
      y = randomNum(10);
    } while (!checkIfCanPlace(x, y, newBoard, updatedShip));
    updatedShip = {
      id: ship.id,
      shipLength: ship.shipLength,
      horizontal: updatedShip.horizontal,
      inGame: true,
      left: x,
      top: y,
    };
    newBoard = placeShip(x, y, newBoard, updatedShip);

    updateNestedShipById(ship.id, updatedShip);
  });
  setBoard(newBoard);
  checkShipsOnBoard();
};
