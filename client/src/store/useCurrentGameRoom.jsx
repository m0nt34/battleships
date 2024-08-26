import { create } from "zustand";

export const useCurrentRoom = create((set) => ({
  currentRoom: "",
  setCurrentRoom: (newRoom) => set({ currentRoom: newRoom }),
}));