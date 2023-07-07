import React, { useState, useEffect } from "react";
import styles from "../screens/Home/styles";

import { View, Text, TouchableOpacity, TextInput, Alert, BackHandler } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

import AppIcon from "../assets/saveme.svg";
import ExitIcon from "../assets/exit.svg";
import ShowIcon from "../assets/show.svg";
import ExportIcon from "../assets/export.svg";
import EditIcon from "../assets/edit.svg";

const defaultName = "usuário";

const exportarDados = () => {
  Alert.alert(
    "Exportar PDF",
    "Você deseja exportar os dados do app?",
    [
      {
        text: "Não",
      },
      //AQUI A CONFIRMAÇÃO DE EXPORTAR PDF VAI FECHAR O APP, SUBSTITUA PELA FUNÇÃO DE EXPORTAÇÃO DE PDF
      { text: "Sim", onPress: () => BackHandler.exitApp() },
    ],
    { cancelable: false }
  );
};

const fecharApp = () => {
  Alert.alert(
    "Fechar aplicativo",
    "Você deseja sair do aplicativo?",
    [
      {
        text: "Não",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "Sim", onPress: () => BackHandler.exitApp() },
    ],
    { cancelable: false }
  );
};

export function LogoTitle({ onToggleSaldo }) {
  const [nomeUsuario, setNomeUsuario] = useState("");
  const [nomeUsuarioEditavel, setNomeUsuarioEditavel] = useState(false);

  useEffect(() => {
    const getUserNameFromStorage = async () => {
      try {
        const storedName = await AsyncStorage.getItem("nomeUsuario");
        if (storedName !== null) setNomeUsuario(storedName);
        else setNomeUsuario(defaultName);
      } catch (error) {
        console.error(
          "Erro ao obter o nome do usuário do AsyncStorage:",
          error
        );
      }
    };
    getUserNameFromStorage();
  }, []);

  const editarNomeUsuario = () => {
    setNomeUsuarioEditavel(true);
  };

  const salvarNomeUsuario = async () => {
    try {
      await AsyncStorage.setItem("nomeUsuario", nomeUsuario.trim());
      console.log("Nome do usuário salvo com sucesso!");
    } catch (error) {
      console.log("Erro ao salvar o nome do usuário:", error);
    }
  };

  const salvarNomeEditado = () => {
    if (nomeUsuario.trim() !== "") {
      setNomeUsuarioEditavel(false);
      salvarNomeUsuario();
    }
  };

  let nomeUsuarioComponente;
  if (nomeUsuarioEditavel) {
    nomeUsuarioComponente = (
      <View style={styles.nomeUsuarioEditavel}>
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome"
          value={nomeUsuario}
          onChangeText={(text) => setNomeUsuario(text)}
          onBlur={salvarNomeEditado}
          autoFocus
        />
      </View>
    );
  } else {
    nomeUsuarioComponente = (
      <Text style={styles.text}>Olá, {nomeUsuario}!</Text>
    );
  }
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "45%",
        }}
      >
        <AppIcon width={24} height={24} color={"#000000"} />

        {nomeUsuarioComponente}

        <TouchableOpacity
          onPress={editarNomeUsuario}
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <EditIcon width={24} height={24} />
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "30%",
        }}
      >
        <TouchableOpacity
          onPress={onToggleSaldo}
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <ShowIcon width={24} height={24} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={exportarDados}
          style={{ flexDirection: "row", alignItems: "center", padding: 5 }}
        >
          <ExportIcon width={24} height={24} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={fecharApp}
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <ExitIcon width={24} height={24} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
