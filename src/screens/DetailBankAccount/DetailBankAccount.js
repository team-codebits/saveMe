import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, ScrollView, Alert } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import styles from "./styles";
import { removeAccounts } from "../../utils/storageAccounts";
import { useExtractStore } from "../../stores/ExtractStore.js";

const DetailBankAccount = ({ route, navigation }) => {
  const { account, index } = route.params;

  const extract = useExtractStore((state) => state.extract);
  const fetchExtract = useExtractStore((state) => state.fetchExtract);

  useEffect(() => {
    fetchExtract();
  }, []);

  const dialogDeleteAccount = (index) => {
    Alert.alert("Delete account", "Do you really want to delete?", [
      {
        text: "Cancel",
      },
      {
        text: "Confirm",
        onPress: () => {
          removeAccounts(index);
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>{account.name}</Text>
      <View style={styles.divider}></View>
      <Text style={styles.text}>
        <Text style={styles.textBold}>Name: </Text>
        {account.name}
      </Text>
      <Text style={styles.text}>
        <Text style={styles.textBold}>Bank: </Text>
        {account.bank}
      </Text>
      <Text style={styles.text}>
        <Text style={styles.textBold}>Balance: </Text>
        {account.balance}
      </Text>
      <Text style={styles.text}>
        <Text style={styles.textBold}>Type: </Text>
        {account.type_account}
      </Text>

      <View style={styles.buttonsView}>
        <Button
          title="Edit"
          onPress={() => navigation.navigate("EditBankAccount", { account })}
        ></Button>
        <Button
          color="red"
          title="Delete"
          onPress={() => dialogDeleteAccount(index)}
        ></Button>
        <Button
          color="#757de8"
          title="Back"
          onPress={() => {
            navigation.goBack();
          }}
        ></Button>
      </View>

      <View style={{ backgroundColor: "#fff" }}>
        <ScrollView>
          <View>
            {extract.filter((item) => item.account == account.name).map((transaction, index) => {
              return (
                <View key={index}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate("ExtractDetail", {
                        transaction,
                        index,
                      });
                    }}
                  >
                    <View style={styles.transaction}>
                      <Text style={styles.extract}>
                        {transaction.name}
                        {"\n"}
                        <Text
                          style={
                            transaction.selectedOption === "revenue"
                              ? styles.revenue
                              : styles.expense
                          }
                        >
                          {"US$"}
                          {transaction.value}
                        </Text>
                      </Text>

                      <Text style={styles.dataStyle}>
                        {transaction.date.getDate()}/{transaction.date.getMonth()}/
                        {transaction.date.getFullYear()}
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

export default DetailBankAccount;
