import { create } from "zustand";
import { useAccountsStore } from "./AccountsStore";
import { getAccounts } from "../utils/storageAccounts";
import { getCards } from "../utils/storageCards";

export const useCardStore = create((set) => ({
  listCards: [],
  fetchCards: async () => {
    const cartoes = await getCards();
    set({ listCards: cartoes });
  },
}));

export const useAccountsCardStore = create((set) => ({
  listAccountsCards: [],
  fetchAccountsCards: async () => {
    const contas = await getAccounts();
    const cartoes = await getCards();

    const contasCartoes = [...contas, ...cartoes];

    set({ listAccountsCards: contasCartoes });
  },
}));