import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";

import { addCards } from "../../utils/storageCards";

import styles from "./styles";

function AddCard({ navigation }) {
  const [name, setName] = useState("");
  const [bank, setBank] = useState("");
  const [totalInvoices, setTotalInvoices] = useState(0.0);

  const handleAddCard = async () => {
    if (
      name === "" ||
      bank === "" ||
      totalInvoices === "" ||
      !Number(totalInvoices) ||
      Number(totalInvoices) < 0
    ) {
      Alert.alert("Fill in the fields correctly!");
      return;
    }

    if (name && bank && totalInvoices) {
      const card = {
        name,
        bank,
        totalInvoices,
      };

      try {
        addCards(card);

        // Clean the fields after adding the card
        setName("");
        setBank("");
        setTotalInvoices(0.0);

        Alert.alert("Card succesfully added!");
      } catch (error) {
        Alert.alert("Error saving card:", error);
      }
      navigation.goBack()
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Add Credit Card</Text>
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
        onChangeText={(text) => setBank(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Total amount of card bills"
        value={totalInvoices}
        onChangeText={(text) => setTotalInvoices(text)}
      />

      <View style={styles.buttonsView}>
        <Button title="Add" onPress={handleAddCard} />
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

export default AddCard;
