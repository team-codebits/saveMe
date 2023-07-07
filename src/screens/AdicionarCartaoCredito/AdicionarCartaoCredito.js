import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";

import { addCartoes } from "../../utils/storageCartoes";

import styles from "./styles";

function AdicionarCartao({ navigation }) {
  const [nome, setNome] = useState("");
  const [banco, setBanco] = useState("");
  const [faturasTotais, setFaturasTotais] = useState(0.0);

  const handleAdicionarCartao = async () => {
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
      const cartao = {
        nome,
        banco,
        faturasTotais,
      };

      try {
        addCartoes(cartao);

        // Limpar os campos após adicionar o cartão
        setNome("");
        setBanco("");
        setFaturasTotais(0.0);

        Alert.alert("Cartão adicionado com sucesso!");
      } catch (error) {
        Alert.alert("Erro ao salvar o cartão:", error);
      }
      navigation.goBack()
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Adicionar Cartão de Crédito</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={(text) => setNome(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Banco"
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
        <Button title="Adicionar" onPress={handleAdicionarCartao} />
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
}

export default AdicionarCartao;
