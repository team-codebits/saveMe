import React from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";

import styles from "./styles";

const ViewCartao = ({ navigation, route }) => {
  const { cartao } = route.params;

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

          // Navigate back to the "Contas" screen
          navigation.goBack();
        },
        style: "destructive",
      },
    ]);
  };

  const handleEdit = () => {
    // Navigate to the "EditarCartao" screen and pass the cartao data
    navigation.navigate("EditarCartao", { cartao });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textName}>{cartao.nome}</Text>
      <Text style={styles.text}>{cartao.numero}</Text>
      <Text style={styles.text}>Vencimento: {cartao.vencimento}</Text>
      <Text style={styles.text}>Codigo: {cartao.codigo}</Text>
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

export default ViewCartao;
