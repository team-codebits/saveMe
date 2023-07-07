import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";

import styles from "./styles.js";
import { addReceitasEDespesas } from "../../utils/storage.js";
import { useContasCartoesStore } from "../../stores/CartoesStore.js";

export default function Formulario() {
  const [nome, setNome] = useState("");
  const [valor, setValor] = useState("");
  const [tipo, setTipo] = useState("");
  const [conta, setConta] = useState("");
  const [opcaoSelecionada, setOpcaoSelecionada] = useState(null);

  const [date, setDate] = useState(new Date(Date.now()));
  const [show, setShow] = useState(false);

  const listaContasCartoes = useContasCartoesStore(
    (state) => state.listaContasCartoes
  );
  const fetchContasCartoes = useContasCartoesStore(
    (state) => state.fetchContasCartoes
  );

  useEffect(() => {
    fetchContasCartoes();
  }, []);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showDatepicker = () => {
    setShow(true);
  };

  const handleOpcaoSelecionada = (opcao) => {
    setOpcaoSelecionada(opcao);
  };

  useEffect(() => {
    if (Platform.OS === "android") {
      setShow(false);
    } else {
      setShow(true);
    }
  }, []);

  function resetForm() {
    setNome("");
    setValor("");
    setTipo("");
    setConta("");
    setOpcaoSelecionada(null);
    setDate(new Date(Date.now()));
  }

  function handleSubmit() {
    if (
      nome === "" ||
      valor === "" ||
      conta === "" ||
      date === null ||
      tipo === "" ||
      opcaoSelecionada === null ||
      !Number(valor) ||
      Number(valor) < 0
    ) {
      Alert.alert("Preencha todos os campos de forma válida!");
      return;
    }

    const data = {
      nome,
      valor,
      tipo,
      conta,
      date,
      opcaoSelecionada,
    };
    addReceitasEDespesas(data);

    resetForm();
  }

  console.log(conta)

  return (
    <View>
      <TextInput
        style={styles.input}
        value={nome}
        placeholder="Nome"
        onChangeText={setNome}
      ></TextInput>

      <TextInput
        style={styles.input}
        value={valor}
        placeholder="Valor"
        onChangeText={setValor}
      ></TextInput>

      <TextInput
        style={styles.input}
        value={tipo}
        placeholder="Tipo"
        onChangeText={setTipo}
      ></TextInput>

      <Text>Selecione a conta: </Text>
      <View style={styles.input}>
        <Picker
          selectedValue={listaContasCartoes[0]}
          onValueChange={(itemValue, itemIndex) => setConta(itemValue)}
        >
          {listaContasCartoes.map((item, index) => {
            return (
              <Picker.Item value={item.nome} label={item.nome} key={index} />
            );
          })}
        </Picker>
      </View>

      <View style={styles.dateInput}>
        {Platform.OS === "android" && (
          <TouchableOpacity
            style={{ paddingVertical: 10, paddingLeft: 10 }}
            onPress={() => showDatepicker()}
          >
            <Text>
              {!date
                ? "Selecionar data"
                : `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`}
            </Text>
          </TouchableOpacity>
        )}

        {Platform.OS === "android" && show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            onChange={onChange}
          />
        )}

        {Platform.OS !== "android" && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            onChange={onChange}
          />
        )}
      </View>

      <View style={styles.buttonRD}>
        <TouchableOpacity
          style={[
            styles.button,
            opcaoSelecionada === "despesa"
              ? styles.inactiveOpcaao
              : styles.buttonSelecionadoR,
          ]}
          onPress={() => handleOpcaoSelecionada("receita")}
        >
          <Text style={styles.buttonLabel}>Receita</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.button,
            opcaoSelecionada === "receita"
              ? styles.inactiveOpcaao
              : styles.buttonSelecionadoD,
          ]}
          onPress={() => handleOpcaoSelecionada("despesa")}
        >
          <Text style={styles.buttonLabel}>Despesa</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.inputAdicionar} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Adicionar</Text>
      </TouchableOpacity>
    </View>
  );
}
