import { create } from "zustand";

export const useMyTurn = create((set) => ({
  myTurn: false,
  setMyTurn: (turn) => set({ myTurn: turn }),
}));
