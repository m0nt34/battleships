import { useBoard } from "../store/useBoard";
import { useShips } from "../store/useShips";
import { usePort } from "../store/useShowPort";

export const handleReset = () => {
  const { setDefaultBoard } = useBoard.getState();
  const { setShowToTrue } = usePort.getState();
  const { setToDefault } = useShips.getState();
  setToDefault();
  setDefaultBoard();
  setShowToTrue();
};
