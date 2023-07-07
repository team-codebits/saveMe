import React from "react";
import { View } from "react-native";

import styles from "./styles.js";
import Formulario from "./FormularioTransacao.js";

export default function Adicionar() {
  return (
    <View style={styles.container}>
      <Formulario />
    </View>
  );
}
