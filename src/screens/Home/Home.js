import React, { useEffect } from "react";
import { View, Text } from "react-native";

import styles from "./styles.js";
import { calculateSumValues } from "../../utils/calculateBalance.js";
import { useExtractStore } from "../../stores/ExtractStore.js";

export default function Home({ visibleBalance }) {
  const extract = useExtractStore((state) => state.extract);
  const fetchExtract = useExtractStore((state) => state.fetchExtract);

  useEffect(() => {
    fetchExtract();
  }, []);

  let saldoValor = calculateSumValues(extract);

  if (visibleBalance === false) {
    balance = <Text style={styles.textSaldo}>US$ {saldoValor}</Text>;
  } else {
    balance = <Text style={styles.textSaldo}>US$ * * * * *</Text>;
  }
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <View style={styles.innerContainer}>{balance}</View>
      </View>
    </View>
  );
}
