import { create } from "zustand";
import { useContaStore } from "./ContasStore";
import { getContas } from "../utils/storageContas";
import { getCartoes } from "../utils/storageCartoes";

export const useCartaoStore = create((set) => ({
  listaCartoes: [],
  fetchCartoes: async () => {
    const cartoes = await getCartoes();
    set({ listaCartoes: cartoes });
  },
}));

export const useContasCartoesStore = create((set) => ({
  listaContasCartoes: [],
  fetchContasCartoes: async () => {
    const contas = await getContas();
    const cartoes = await getCartoes();

    const contasCartoes = [...contas, ...cartoes];

    set({ listaContasCartoes: contasCartoes });
  },
}));