import { useShips } from "../store/useShips";

export const getShipByID = (id) => {
  const { ships } = useShips.getState();
  return ships.flatMap((group) => group.ships).find((ship) => ship.id === id);
};
