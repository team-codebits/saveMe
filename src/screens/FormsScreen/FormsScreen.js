import React from "react";
import { View } from "react-native";

import styles from "../../styles/AddTransactionsStyle.js";

export default function FormsScreen({ route }) {
  const { component } = route.params;

  return <View style={styles.container}>{component}</View>;
}
