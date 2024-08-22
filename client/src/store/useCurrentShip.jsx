import { create } from "zustand";

export const useCurrentShip = create((set) => ({
  ship:{
    id:"",
    selectedFromLeft:0,
    selectedFromTop:0,
  },
  setShip: (newShip) => set({ ship: newShip }),
}));
