import { create } from "zustand";

import { getAccounts } from "../utils/storageAccounts";

export const useAccountsStore = create((set) => ({
  listAccounts: [],
  fetchAccounts: async () => {
    const accounts = await getAccounts();
    set({ listAccounts: accounts });
  },
}));
