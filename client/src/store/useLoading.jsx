import { create } from "zustand";

export const useLoading = create((set) => ({
  loading: false,
  setLoading: (newLoading) => set({ loading: newLoading }),
}));