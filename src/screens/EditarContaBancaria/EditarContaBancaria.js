import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";

import {updateContas} from "../../utils/storageContas";

import styles from "./styles";

const EditarContaBancaria = ({ route, navigation }) => {
  const { index, conta } = route.params;
  const [nome, setNome] = useState(conta.nome);
  const [banco, setBanco] = useState(conta.banco);
  const [saldo, setSaldo] = useState(conta.saldo.toString());
  const [tipo_conta, setTipoConta] = useState(conta.tipo_conta);

  const handleEditarConta = async () => {
    if (
      nome === "" ||
      banco === "" ||
      saldo === "" ||
      tipo_conta === "" ||
      !Number(valor) ||
      Number(valor) < 0
    ) {
      Alert.alert("Preencha os campos corretamente!");
      return;
    }

    if (nome && banco && saldo && tipo_conta) {
      const contaEditada = {
        id: conta.id,
        nome: conta.nome,
        banco,
        saldo: parseFloat(saldo),
        tipo_conta,
      };

      try {
        updateContas(index, contaEditada);
      } catch (error) {
        console.log("Erro ao salvar a conta:", error);
      }
    }
  };


  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Editar Conta Bancária</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="Banco"
        value={banco}
        onChangeText={setBanco}
      />
      <TextInput
        style={styles.input}
        placeholder="Saldo"
        value={saldo}
        onChangeText={setSaldo}
      />
      <TextInput
        style={styles.input}
        placeholder="Tipo de Conta"
        value={tipo_conta}
        onChangeText={setTipoConta}
      />

      <View style={styles.buttonsView}>
        <Button title="Salvar" onPress={handleEditarConta} />
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
export default EditarContaBancaria;
