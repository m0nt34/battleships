import { useShips } from "../store/useShips";

export const getShipByID = (id) => {
  const { ships } = useShips.getState();
  return ships
    .flatMap((section) => section.ships)
    .find((ship) => ship.id === id);
};
