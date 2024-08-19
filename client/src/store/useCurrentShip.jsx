import { create } from "zustand";

export const useCurrentShip = create((set) => ({
  ship: {
    id: "",
    horizontal: true,
    left: "",
    top: "",
  },
  setShip: (newShip) => set({ ship: newShip }),
}));