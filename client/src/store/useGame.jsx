import { create } from "zustand";

export const useGame = create((set) => ({
  gameStarted: false,
  setGameToTrue: () => set({ gameStarted: true }),
  setGameToFalse: () => set({ gameStarted: false }),
}));
