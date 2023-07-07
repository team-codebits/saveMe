import React from "react";
import { View, Text, Button, Alert } from "react-native";

import styles from "./styles.js";
import { removeReceitasEDespesas } from "../../utils/storage.js";

export default function DetalheExtrato({ route, navigation }) {
  const { transacao, index } = route.params;

  const handleEditar = () => {
    navigation.navigate("FormularioEdicao", { transacao, index });
  };

  console.log(transacao)

  const handleSalvarEdicao = (data) => {
    console.log("Dados editados:", data);
    // ...
  };

  const dialogDeleteTransacao = (index) => {
    Alert.alert("Apagar transação", "Deseja realmente apagar?", [
      {
        text: "Cancelar",
      },
      {
        text: "Confirmar",
        onPress: () => {
          removeReceitasEDespesas(index);
          navigation.goBack();
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>{transacao.nome}</Text>
      <View style={styles.divider}></View>
      <Text style={styles.text}>
        <Text style={styles.textBold}>Conta: </Text>
        {transacao.conta}
      </Text>
      <Text style={styles.text}>
        <Text style={styles.textBold}>Tipo: </Text>
        {transacao.tipo}
      </Text>
      <Text style={styles.text}>
        <Text style={[styles.textBold, { textTransform: "capitalize" }]}>
          {transacao.opcaoSelecionada}
        </Text>
        {" de R$ " + transacao.valor}
      </Text>
      <Text style={styles.text}>
        <Text style={styles.textBold}>Data: </Text>
        {transacao.date.getDate()}/{transacao.date.getMonth()}/{transacao.date.getFullYear()}
      </Text>

      <View style={styles.buttonsView}>
        <Button title="Editar" onPress={handleEditar}></Button>
        <Button
          color="red"
          title="Apagar"
          onPress={() => dialogDeleteTransacao(index)}
        ></Button>
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
