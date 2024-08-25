import { create } from "zustand";
import { matrix } from "../utils/getMatrix";

export const useOpponentBoard = create((set) => ({
  OpBoard: matrix(10),
  setOpBoard: (newBoard) => set({ OpBoard: newBoard }),
  setDefaultOpBoard: () => set({ board: matrix(10) }),
}));
