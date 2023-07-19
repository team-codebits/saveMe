import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";

import { addAccounts } from "../../utils/storageAccounts.js";

import styles from "../../styles/styles";

function AddAccount({ navigation }) {
  const [name, setName] = useState("");
  const [bank, setbank] = useState("");
  const [balance, setbalance] = useState(0.0);
  const [type_account, settype] = useState("");

  const handleAddAccount = async () => {
    if (
      name === "" ||
      bank === "" ||
      balance === "" ||
      type_account === "" ||
      !Number(balance) ||
      Number(balance) < 0
    ) {
      Alert.alert("Fill in all the fields correctly!");
      return;
    }

    if (name && bank && balance && type_account) {
      const account = {
        name,
        bank,
        balance,
        type_account,
      };

      try {
        // Save the card details
        addAccounts(account);

        // Clean the fields after adding the card
        setName("");
        setbank("");
        setbalance(0.0);
        settype("");
      } catch (error) {
        console.log("Error saving card:", error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Add Bank Account</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Bank"
        value={bank}
        onChangeText={(text) => setbank(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Balance"
        value={balance}
        onChangeText={(text) => setbalance(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Account type"
        value={type_account}
        onChangeText={(text) => settype(text)}
      />

      <View style={styles.buttonsView}>
        <Button title="Add" onPress={handleAddAccount} />
      </View>
    </View>
  );
}

export default AddAccount;
