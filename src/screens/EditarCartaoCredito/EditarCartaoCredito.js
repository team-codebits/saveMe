import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";

import { updateCartoes } from "../../utils/storageCartoes";
import styles from "./styles";

const EditarCartaoCredito = ({ route, navigation }) => {
  const { index, cartao } = route.params;
  const [nome, setNome] = useState(cartao.nome);
  const [banco, setBanco] = useState(cartao.banco);
  const [faturasTotais, setFaturasTotais] = useState(cartao.faturasTotais);

  const handleEditarCartao = async () => {
    if (
      nome === "" ||
      banco === "" ||
      faturasTotais === "" ||
      !Number(faturasTotais) ||
      Number(faturasTotais) < 0
    ) {
      Alert.alert("Preencha os campos corretamente!");
      return;
    }

    if (nome && banco && faturasTotais) {
      const editedCartao = {
        nome,
        banco,
        faturasTotais,
      };

      try {
        // Atualizar os detalhes do cartão
        updateCartoes(index, editedCartao)
          Alert.alert("Cartão editado com sucesso!");
      } catch (error) {
        Alert.alert("Erro ao editar o cartão:", error);
      }
      navigation.goBack()
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Editar Cartão de Crédito</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={(text) => setNome(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Número"
        value={banco}
        onChangeText={(text) => setBanco(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Valor total das faturas do cartão"
        value={faturasTotais}
        onChangeText={(text) => setFaturasTotais(text)}
      />

      <View style={styles.buttonsView}>
        <Button title="Salvar" onPress={handleEditarCartao} />
        <Button
          color="#757de8"
          title="Voltar"
          onPress={() => {
            navigation.goBack();
          }}
        ></Button>
      </View>
    </View>
  );
};

export default EditarCartaoCredito;
