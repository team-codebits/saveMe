import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, ScrollView, Alert } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import styles from "./styles";
import { removeContas } from "../../utils/storageContas";
import { useExtratoStore } from "../../stores/ExtratoStore.js";

const DetalheContaBancaria = ({ route, navigation }) => {
  const { conta, index } = route.params;

  const extrato = useExtratoStore((state) => state.extrato);
  const fetchExtrato = useExtratoStore((state) => state.fetchExtrato);

  useEffect(() => {
    fetchExtrato();
  }, []);

  const dialogDeleteConta = (index) => {
    Alert.alert("Apagar conta", "Deseja realmente apagar?", [
      {
        text: "Cancelar",
      },
      {
        text: "Confirmar",
        onPress: () => {
          removeContas(index);
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>{conta.nome}</Text>
      <View style={styles.divider}></View>
      <Text style={styles.text}>
        <Text style={styles.textBold}>Nome: </Text>
        {conta.nome}
      </Text>
      <Text style={styles.text}>
        <Text style={styles.textBold}>Banco: </Text>
        {conta.banco}
      </Text>
      <Text style={styles.text}>
        <Text style={styles.textBold}>Saldo: </Text>
        {conta.saldo}
      </Text>
      <Text style={styles.text}>
        <Text style={styles.textBold}>Tipo: </Text>
        {conta.tipo_conta}
      </Text>

      <View style={styles.buttonsView}>
        <Button
          title="Editar"
          onPress={() => navigation.navigate("EditarContaBancaria", { conta })}
        ></Button>
        <Button
          color="red"
          title="Apagar"
          onPress={() => dialogDeleteConta(index)}
        ></Button>
        <Button
          color="#757de8"
          title="Voltar"
          onPress={() => {
            navigation.goBack();
          }}
        ></Button>
      </View>

      <View style={{ backgroundColor: "#fff" }}>
        <ScrollView>
          <View>
            {extrato.filter((item) => item.conta == conta.nome).map((transacao, index) => {
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
    </View>
  );
};

export default DetalheContaBancaria;
