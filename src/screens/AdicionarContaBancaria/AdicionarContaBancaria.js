import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";

import { addContas } from "../../utils/storageContas.js";

import styles from "./styles";

function AdicionarContaBancaria({ navigation }) {
  const [nome, setNome] = useState("");
  const [banco, setbanco] = useState("");
  const [saldo, setsaldo] = useState(0.0);
  const [tipo_conta, settipo] = useState("");

  const handleAdicionarConta = async () => {
    if (
      nome === "" ||
      banco === "" ||
      saldo === "" ||
      tipo_conta === "" ||
      !Number(saldo) ||
      Number(saldo) < 0
    ) {
      Alert.alert("Preencha os campos corretamente!");
      return;
    }

    if (nome && banco && saldo && tipo_conta) {
      const conta = {
        nome,
        banco,
        saldo,
        tipo_conta,
      };

      try {
        // Salvar os detalhes do cartão
        addContas(conta);

        // Limpar os campos após adicionar o cartão
        setNome("");
        setbanco("");
        setsaldo(0.0);
        settipo("");
      } catch (error) {
        console.log("Erro ao salvar o cartão:", error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Adicionar Conta Bancaria</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={(text) => setNome(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="banco"
        value={banco}
        onChangeText={(text) => setbanco(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="saldo"
        value={saldo}
        onChangeText={(text) => setsaldo(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Tipo de Conta"
        value={tipo_conta}
        onChangeText={(text) => settipo(text)}
      />

      <View style={styles.buttonsView}>
        <Button title="Adicionar" onPress={handleAdicionarConta} />
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

export default AdicionarContaBancaria;
