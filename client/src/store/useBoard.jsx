import { create } from "zustand";
import { matrix } from "../utils/getMatrix";

export const useBoard = create((set) => ({
  board: matrix(10),
  setBoard: (newBoard) => set({ board: newBoard }),
  setDefaultBoard: () => set({ board: matrix(10) }),
}));
