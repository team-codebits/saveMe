import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, TouchableOpacity, Alert } from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import AddIcon from "../../assets/add.svg";
import EditIcon from "../../assets/edit.svg";
import DeleteIcon from "../../assets/delete_white.svg";
import styles from "./styles.js";

import { useContaStore } from "../../stores/ContasStore.js";
import { useCartaoStore } from "../../stores/CartoesStore.js";

import { removeContas } from "../../utils/storageContas";
import { removeCartoes } from "../../utils/storageCartoes";

const Contas = ({ navigation }) => {
  const listaContas = useContaStore((state) => state.listaContas);
  const fetchContas = useContaStore((state) => state.fetchContas);
  const listaCartoes = useCartaoStore((state) => state.listaCartoes);
  const fetchCartoes = useCartaoStore((state) => state.fetchCartoes);

  const [contasAtualizadas, setContasAtualizadas] = useState(false);

  useEffect(() => {
    fetchContas();
    fetchCartoes();
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      fetchContas();
      fetchCartoes();
    }, [contasAtualizadas])
  );

  const dialogDeleteCartao = (index) => {
    Alert.alert("Deletar cartão", "Deseja realmente deletar?", [
      {
        text: "Cancelar",
      },
      {
        text: "Confirmar",
        onPress: () => {
          fetchCartoes();
          removeCartoes(index);
        },
      },
    ]);
  };

  const dialogDetails = (conta) => {
    Alert.alert(conta.nome, conta.tipo_conta);
  };

  const dialogDeleteConta = (index) => {
    Alert.alert("Apagar conta", "Deseja realmente apagar?", [
      {
        text: "Cancelar",
      },
      {
        text: "Confirmar",
        onPress: async () => {
          removeContas(index);
          setContasAtualizadas(true);
        },
      },
    ]);
  };

  return (
    <>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <ScrollView style={styles.containerScroll}>
          <Text style={styles.textTitle}>Contas Bancárias</Text>

          {listaContas.map((conta, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() =>  navigation.navigate("DetalheContaBancaria", { conta })}
              >
                <View style={styles.contaBancaria}>
                  <Text style={[styles.cardText, styles.cardTextTitle]}>
                    {conta.banco}
                  </Text>
                  <Text style={styles.cardText}>R$ {conta.saldo}</Text>

                  <View style={styles.cardIcons}>
                    {/* Edit button*/}
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate("EditarContaBancaria", { index, conta })
                      }
                    >
                      <EditIcon width={20} height={20} />
                    </TouchableOpacity>

                    {/* Delete button */}
                    <TouchableOpacity onPress={() => dialogDeleteConta(index)}>
                      <DeleteIcon width={20} height={20} />
                    </TouchableOpacity>
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}

          <View style={styles.addButtonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("AdicionarContaBancaria")}
            >
              <AddIcon width={24} height={24} />
            </TouchableOpacity>
          </View>
        </ScrollView>

        <ScrollView style={styles.containerScroll}>
          <Text style={styles.textTitle}>Cartões de Crédito</Text>
          {listaCartoes.map((cartao, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() =>
                  navigation.navigate("DetalheCartaoCredito", { cartao, index })
                }
              >
                <View style={styles.cardCartao}>
                  <Text style={[styles.cardText, styles.cardTextTitle]}>
                    {cartao.nome}
                  </Text>
                  <Text style={styles.cardText}>R$ {cartao.faturasTotais}</Text>

                  <View style={styles.cardIcons}>
                    {/* Edit button*/}
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate("EditarCartaoCredito", { index, cartao })
                      }
                    >
                      <EditIcon width={20} height={20} />
                    </TouchableOpacity>

                    {/* Delete button */}
                    <TouchableOpacity onPress={() => dialogDeleteCartao(index)}>
                      <DeleteIcon width={20} height={20} />
                    </TouchableOpacity>
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}

          <View style={styles.addButtonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("AdicionarCartaoCredito")}
            >
              <AddIcon width={24} height={24} />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default Contas;
