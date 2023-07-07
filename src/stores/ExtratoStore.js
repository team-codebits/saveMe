import { create } from "zustand";

import { getReceitasEDespesas } from "../utils/storage";

export const useExtratoStore = create((set) => ({
  extrato: [],
  fetchExtrato: async () => {
    const data = await getReceitasEDespesas();
    set({ extrato: data });
  },
}));
