import { create } from "zustand";

import { getAccounts } from "../utils/storageAccounts";

export const useAccountsStore = create((set) => ({
  listAccounts: [],
  fetchAccounts: async () => {
    const contas = await getAccounts();
    set({ listAccounts: contas });
  },
}));
