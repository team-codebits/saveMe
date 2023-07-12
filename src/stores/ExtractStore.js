import { create } from "zustand";

import { getRevenuesAndExpenses } from "../utils/storage";

export const useExtractStore = create((set) => ({
  extract: [],
  fetchExtract: async () => {
    const data = await getRevenuesAndExpenses();
    set({ extract: data });
  },
}));
