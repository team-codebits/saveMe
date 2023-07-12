import React from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";

import styles from "./styles";

const ViewCard = ({ navigation, route }) => {
  const { card } = route.params;

  const handleDelete = () => {
    Alert.alert("Deletar cartão", "Deseja realmente deletar?", [
      {
        text: "Cancelar",
        style: "cancel",
      },
      {
        text: "Confirmar",
        onPress: () => {
          // Perform delete logic here

          // Navigate back to the "Accounts" screen
          navigation.goBack();
        },
        style: "destructive",
      },
    ]);
  };

  const handleEdit = () => {
    // Navigate to the "EditarCartao" screen and pass the card data
    navigation.navigate("EditarCartao", { card });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textName}>{card.name}</Text>
      <Text style={styles.text}>{card.numero}</Text>
      <Text style={styles.text}>Vencimento: {card.vencimento}</Text>
      <Text style={styles.text}>Codigo: {card.codigo}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleEdit} style={styles.editButton}>
          <Text style={styles.buttonTextEdit}>Editar Cartão</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleDelete} style={styles.deleteButton}>
          <Text style={styles.buttonTextDelete}>Deletar Cartão</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ViewCard;
