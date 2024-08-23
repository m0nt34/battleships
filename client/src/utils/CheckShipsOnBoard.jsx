import { useShips } from "../store/useShips";
import { usePort } from "../store/useShowPort";

export const checkShipsOnBoard = () => {
  const { ships } = useShips.getState();
  const { setShowToFalse, setShowToTrue } = usePort.getState();
  const allShips = ships.flatMap((groups) => groups.ships);
  const allShipsOnBoard = allShips.every((ship) => ship.inGame);
  if (allShipsOnBoard) {
    setShowToFalse();
  } else {
    setShowToTrue();
  }
};
