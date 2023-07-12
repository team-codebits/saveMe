import React from "react";
import { View } from "react-native";

import styles from "./styles.js";
import Form from "./TransactionForm.js";

export default function Add() {
  return (
    <View style={styles.container}>
      <Form />
    </View>
  );
}
