import { create } from "zustand";
import { matrix } from "../utils/getMatrix";

export const useMyGuessBoard = create((set) => ({
  myGuessBoard: matrix(10),
  setMyGuessBoard: (newBoard) => set({ myGuessBoard: newBoard }),
  setMyGuessBoardToDefault: () => set({ myGuessBoard: matrix(10) }),
}));
