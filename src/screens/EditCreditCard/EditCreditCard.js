import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";

import { updateCards } from "../../utils/storageCards";
import styles from "./styles";

const EditCreditCard = ({ route, navigation }) => {
  const { index, card } = route.params;
  const [name, setName] = useState(card.name);
  const [bank, setBank] = useState(card.bank);
  const [totalInvoices, setTotalInvoices] = useState(card.totalInvoices);

  const handleEditCard = async () => {
    if (
      name === "" ||
      bank === "" ||
      totalInvoices === "" ||
      !Number(totalInvoices) ||
      Number(totalInvoices) < 0
    ) {
      Alert.alert("Complete all the fields correctly!");
      return;
    }

    if (name && bank && totalInvoices) {
      const editedCard = {
        name,
        bank,
        totalInvoices,
      };

      try {
        // Update the card details
        updateCards(index, editedCard)
          Alert.alert("Card succesfully edited!");
      } catch (error) {
        Alert.alert("Error editing card:", error);
      }
      navigation.goBack()
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Edit Credit Card</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Number"
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
        <Button title="Save" onPress={handleEditCard} />
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

export default EditCreditCard;
