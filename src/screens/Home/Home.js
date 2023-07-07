import React, { useEffect } from "react";

import { View, Text } from "react-native";

import styles from "./styles.js";
import { calcularSomaValores } from "../../utils/calculaSaldo.js";
import { useExtratoStore } from "../../stores/ExtratoStore.js";

export default function Home({ saldoVisivel }) {
  const extrato = useExtratoStore((state) => state.extrato);
  const fetchExtrato = useExtratoStore((state) => state.fetchExtrato);

  useEffect(() => {
    fetchExtrato();
  }, []);

  let saldoValor = calcularSomaValores(extrato);

  if (saldoVisivel === false) {
    saldo = <Text style={styles.textSaldo}>R$ {saldoValor}</Text>;
  } else {
    saldo = <Text style={styles.textSaldo}>R$ * * * * *</Text>;
  }
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <View style={styles.innerContainer}>{saldo}</View>
      </View>
    </View>
  );
}
