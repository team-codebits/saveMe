import { create } from "zustand";

import { getContas } from "../utils/storageContas";

export const useContaStore = create((set) => ({
  listaContas: [],
  fetchContas: async () => {
    const contas = await getContas();
    set({ listaContas: contas });
  },
}));
