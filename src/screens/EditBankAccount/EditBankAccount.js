import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";

import {updateAccounts} from "../../utils/storageAccounts";

import styles from "./styles";

const EditBankAccount = ({ route, navigation }) => {
  const { index, account } = route.params;
  const [name, setName] = useState(account.name);
  const [bank, setBank] = useState(account.bank);
  const [balance, setBalance] = useState(account.balance.toString());
  const [type_account, setTypeAccount] = useState(account.type_account);

  const handleEditAccount = async () => {
    if (
      name === "" ||
      bank === "" ||
      balance === "" ||
      type_account === "" ||
      !Number(value) ||
      Number(value) < 0
    ) {
      Alert.alert("Fill in all the fields correctly!");
      return;
    }

    if (name && bank && balance && type_account) {
      const editedAccount = {
        id: account.id,
        name: account.name,
        bank,
        balance: parseFloat(balance),
        type_account,
      };

      try {
        updateAccounts(index, editedAccount);
      } catch (error) {
        console.log("Error saving account:", error);
      }
    }
  };


  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Edit Bank Account</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Bank"
        value={bank}
        onChangeText={setBank}
      />
      <TextInput
        style={styles.input}
        placeholder="Balance"
        value={balance}
        onChangeText={setBalance}
      />
      <TextInput
        style={styles.input}
        placeholder="Account type"
        value={type_account}
        onChangeText={setTypeAccount}
      />

      <View style={styles.buttonsView}>
        <Button title="Save" onPress={handleEditAccount} />
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
};
export default EditBankAccount;
