import React, { useState, useEffect } from "react";
import styles from "../screens/Home/styles";

import { View, Text, TouchableOpacity, TextInput, Alert, BackHandler } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

import AppIcon from "../assets/saveme.svg";
import ExitIcon from "../assets/exit.svg";
import ShowIcon from "../assets/show.svg";
import ExportIcon from "../assets/export.svg";
import EditIcon from "../assets/edit.svg";

const defaultName = "user";

const exportData = () => {
  Alert.alert(
    "Export PDF",
    "Do you really want to export the app data?",
    [
      {
        text: "No",
      },
      //HERE THE PDF EXPORT CONFIRMATION WILL CLOSE THE APP, REPLACE IT WITH THE PDF EXPORT FUNCTION
      { text: "Yes", onPress: () => BackHandler.exitApp() },
    ],
    { cancelable: false }
  );
};

const closeApp = () => {
  Alert.alert(
    "Close app",
    "Do yout want to exit the app?",
    [
      {
        text: "No",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "Yes", onPress: () => BackHandler.exitApp() },
    ],
    { cancelable: false }
  );
};

export function LogoTitle({ onToggleBalance }) {
  const [userName, setUserName] = useState("");
  const [editableUserName, setUserNameEditable] = useState(false);

  useEffect(() => {
    const getUserNameFromStorage = async () => {
      try {
        const storedName = await AsyncStorage.getItem("userName");
        if (storedName !== null) setUserName(storedName);
        else setUserName(defaultName);
      } catch (error) {
        console.error(
          "Error getting user name from AsyncStorage:",
          error
        );
      }
    };
    getUserNameFromStorage();
  }, []);

  const editUserName = () => {
    setUserNameEditable(true);
  };

  const saveUserName = async () => {
    try {
      await AsyncStorage.setItem("userName", userName.trim());
      console.log("Nome do usuário salvo com sucesso!");
    } catch (error) {
      console.log("Erro ao salvar o name do usuário:", error);
    }
  };

  const saveEditedName = () => {
    if (userName.trim() !== "") {
      setUserNameEditable(false);
      saveUserName();
    }
  };

  let userNameComponent;
  if (editableUserName) {
    userNameComponent = (
      <View style={styles.editableUserName}>
        <TextInput
          style={styles.input}
          placeholder="Digite seu name"
          value={userName}
          onChangeText={(text) => setUserName(text)}
          onBlur={saveEditedName}
          autoFocus
        />
      </View>
    );
  } else {
    userNameComponent = (
      <Text style={styles.text}>Hello, {userName}!</Text>
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

        {userNameComponent}

        <TouchableOpacity
          onPress={editUserName}
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
          onPress={onToggleBalance}
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <ShowIcon width={24} height={24} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={exportData}
          style={{ flexDirection: "row", alignItems: "center", padding: 5 }}
        >
          <ExportIcon width={24} height={24} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={closeApp}
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <ExitIcon width={24} height={24} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
