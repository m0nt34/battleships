import { create } from "zustand";

export const usePort = create((set) => ({
  show: true,
  setShowToFalse: () => set({ show: false }),
  setShowToTrue: () => set({ show: true }),
}));
