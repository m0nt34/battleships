export const calculateCoordinates = (e) => {
  const targetRect = e.currentTarget.getBoundingClientRect();
  const relativeX = Math.floor((e.clientX - targetRect.left) / 35);
  const relativeY = Math.floor((e.clientY - targetRect.top) / 35);
  return { relativeX, relativeY };
};
