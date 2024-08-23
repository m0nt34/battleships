import { useCurrentShip } from "../store/useCurrentShip";

export const handleSetCurrentShip = (e) => {
  const { setShip } = useCurrentShip.getState();
  const { offsetX, offsetY } = e.nativeEvent;

  const selectedShipObj = {
    id: e.currentTarget.id,
    selectedFromLeft: Math.floor(offsetX / 35),
    selectedFromTop: Math.floor(offsetY / 35),
  };
  setShip(selectedShipObj);
};
export const handleUnsetCurrentShip = () => {
  const { setShip } = useCurrentShip.getState();
  const selectedShipObj = {
    id: "",
    selectedFromLeft: 0,
    selectedFromTop: 0,
  };
  setTimeout(() => {
    setShip(selectedShipObj);
  });
};
