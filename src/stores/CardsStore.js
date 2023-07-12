import { create } from "zustand";
import { useAccountsStore } from "./AccountsStore";
import { getAccounts } from "../utils/storageAccounts";
import { getCards } from "../utils/storageCards";

export const useCardStore = create((set) => ({
  listCards: [],
  fetchCards: async () => {
    const cards = await getCards();
    set({ listCards: cards });
  },
}));

export const useAccountsCardStore = create((set) => ({
  listAccountsCards: [],
  fetchAccountsCards: async () => {
    const accounts = await getAccounts();
    const cards = await getCards();

    const accountsCards = [...accounts, ...cards];

    set({ listAccountsCards: accountsCards });
  },
}));