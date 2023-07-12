import React from "react";
import { View, Text, Button, Alert } from "react-native";

import styles from "./styles.js";
import { removeRevenuesAndExpenses } from "../../utils/storage.js";

export default function ExtractDetail({ route, navigation }) {
  const { transaction, index } = route.params;

  const handleEdit = () => {
    navigation.navigate("EditForm", { transaction, index });
  };

  console.log(transaction)

  const handleSalvarEdicao = (data) => {
    console.log("Data edited:", data);
    // ...
  };

  const dialogDeleteTransaction = (index) => {
    Alert.alert("Delete transaction", "Do you really want to delete?", [
      {
        text: "Cancel",
      },
      {
        text: "Confirm",
        onPress: () => {
          removeRevenuesAndExpenses(index);
          navigation.goBack();
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>{transaction.name}</Text>
      <View style={styles.divider}></View>
      <Text style={styles.text}>
        <Text style={styles.textBold}>Account: </Text>
        {transaction.account}
      </Text>
      <Text style={styles.text}>
        <Text style={styles.textBold}>Type: </Text>
        {transaction.type}
      </Text>
      <Text style={styles.text}>
        <Text style={[styles.textBold, { textTransform: "capitalize" }]}>
          {transaction.selectedOption}
        </Text>
        {" of US$ " + transaction.value}
      </Text>
      <Text style={styles.text}>
        <Text style={styles.textBold}>Date: </Text>
        {transaction.date.getDate()}/{transaction.date.getMonth()}/{transaction.date.getFullYear()}
      </Text>

      <View style={styles.buttonsView}>
        <Button title="Edit" onPress={handleEdit}></Button>
        <Button
          color="red"
          title="Delete"
          onPress={() => dialogDeleteTransaction(index)}
        ></Button>
        <Button
          color="#757de8"
          title="Back"
          onPress={() => {
            navigation.goBack();
          }}
        ></Button>
      </View>
    </View>
  );
}
