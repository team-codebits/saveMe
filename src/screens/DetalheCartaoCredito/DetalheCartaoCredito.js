import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, ScrollView, TouchableOpacity, Alert } from "react-native";

import styles from "./styles";
import { useExtratoStore } from "../../stores/ExtratoStore.js";

const DetalheCartaoCredito = ({ navigation, route }) => {
  const { cartao } = route.params;

  const extrato = useExtratoStore((state) => state.extrato);
  const fetchExtrato = useExtratoStore((state) => state.fetchExtrato);

  useEffect(() => {
    fetchExtrato();
  }, []);

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
    navigation.navigate("EditarCartaoCredito", { cartao });
  };

  return (
    <>
    <View style={styles.container}>
      <Text style={styles.textName}>{cartao.nome}</Text>
      <Text style={styles.text}>{cartao.banco}</Text>
      <Text style={styles.text}>Faturas totais: R$ {cartao.faturasTotais}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleEdit} style={styles.editButton}>
          <Text style={styles.buttonTextEdit}>Editar Cartão</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleDelete} style={styles.deleteButton}>
          <Text style={styles.buttonTextDelete}>Deletar Cartão</Text>
        </TouchableOpacity>
      </View>
    </View>
    <View style={{ backgroundColor: "#fff",padding: 20 }}>
    <ScrollView>
      <View>
        {extrato.filter((item) => item.conta == cartao.nome).map((transacao, index) => {
          return (
            <View key={index}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("DetalheExtrato", {
                    transacao,
                    index,
                  });
                }}
              >
                <View style={styles.transacao}>
                  <Text style={styles.extrato}>
                    {transacao.nome}
                    {"\n"}
                    <Text
                      style={
                        transacao.opcaoSelecionada === "receita"
                          ? styles.receita
                          : styles.despesa
                      }
                    >
                      {"R$"}
                      {transacao.valor}
                    </Text>
                  </Text>

                  <Text style={styles.dataStyle}>
                    {transacao.date.getDate()}/{transacao.date.getMonth()}/
                    {transacao.date.getFullYear()}
                  </Text>
                </View>
              </TouchableOpacity>
              <View style={styles.eu}></View>
            </View>
          );
        })}
      </View>
    </ScrollView>
  </View>
  </>
  );
};

export default DetalheCartaoCredito;
