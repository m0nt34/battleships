import { create } from "zustand";
import { matrix } from "../utils/getMatrix";

export const useOpGuessBoard = create((set) => ({
  opGuessBoard: matrix(10),
  setOpGuessBoard: (newBoard) => set({ opGuessBoard: newBoard }),
  setOpGuessBoardToDefault: () => set({ opGuessBoard: matrix(10) }),
}));
