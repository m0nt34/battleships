import { getShipByID } from "./getShipById";
import { checkIfCanPlace } from "./checkIfCanPlaceShip";
import { placeShip, pickupShip } from "./boardManipulations";
import { useCurrentShip } from "../store/useCurrentShip";
import { useShips } from "../store/useShips";
import { calculateCoordinates } from "./calculateCoordinates";
import { useBoard } from "../store/useBoard";

const handleMouseUp = async (column, row, board, dragging) => {
  const { ship } = useCurrentShip.getState();
  const { updateNestedShipById } = useShips.getState();
  var newBoard = board;
  const currShip = getShipByID(ship.id);
  const calculatedLeft = row - ship.selectedFromLeft;
  const calculatedTop = column - ship.selectedFromTop;

  if (dragging && ship.id !== "") {
    if (currShip.left !== -1) {
      newBoard = await pickupShip(currShip.left, currShip.top, board, currShip);
    }

    if (checkIfCanPlace(calculatedLeft, calculatedTop, newBoard, currShip)) {
      const updatedShipObj = {
        id: currShip.id,
        shipLength: currShip.shipLength,
        horizontal: currShip.horizontal,
        inGame: true,
        left: calculatedLeft,
        top: calculatedTop,
      };
      updateNestedShipById(currShip.id, updatedShipObj);
      newBoard = await placeShip(
        calculatedLeft,
        calculatedTop,
        newBoard,
        currShip
      );

      return newBoard;
    } else if (currShip.left !== -1) {
      newBoard = await placeShip(
        currShip.left,
        currShip.top,
        newBoard,
        currShip
      );
      return newBoard;
    }
  } else if (ship.id !== "") {
    newBoard = await pickupShip(currShip.left, currShip.top, board, currShip);
    const updatedShipObj = {
      id: currShip.id,
      shipLength: currShip.shipLength,
      horizontal: !currShip.horizontal,
      inGame: true,
      left: calculatedLeft,
      top: calculatedTop,
    };
    if (
      checkIfCanPlace(calculatedLeft, calculatedTop, newBoard, updatedShipObj)
    ) {
      newBoard = await placeShip(
        calculatedLeft,
        calculatedTop,
        newBoard,
        updatedShipObj
      );

      await updateNestedShipById(currShip.id, updatedShipObj);
      return newBoard;
    } else {
      return board;
    }
  }
  return board;
};
export const mainMouseUpFunction = async (e, dragging) => {
  const { setBoard,board } = useBoard.getState();
  const { relativeY, relativeX } = calculateCoordinates(e);
  const newBoard = await handleMouseUp(relativeY, relativeX, board, dragging);
  setBoard(newBoard);
};
