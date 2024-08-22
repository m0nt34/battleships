export const setShipStyle = (hor, length) => {
  if (hor) {
    return {
      width: 35 * length,
      height: 35,
    };
  } else {
    return {
      width: 35,
      height: 35 * length,
    };
  }
};
