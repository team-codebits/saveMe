import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, ScrollView, TouchableOpacity, Alert } from "react-native";

import styles from "./styles";
import { useExtractStore } from "../../stores/ExtractStore.js";

const DetailCreditCard = ({ navigation, route }) => {
  const { card } = route.params;

  const extract = useExtractStore((state) => state.extract);
  const fetchExtract = useExtractStore((state) => state.fetchExtract);

  useEffect(() => {
    fetchExtract();
  }, []);

  const handleDelete = () => {
    Alert.alert("Delete card", "Do you really want to delete?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Confirm",
        onPress: () => {
          // Perform delete logic here

          // Navigate back to the "Accounts" screen
          navigation.goBack();
        },
        style: "destructive",
      },
    ]);
  };

  const handleEdit = () => {
    // Navigate to the "EditarCartao" screen and pass the card data
    navigation.navigate("EditCreditCard", { card });
  };

  return (
    <>
    <View style={styles.container}>
      <Text style={styles.textName}>{card.name}</Text>
      <Text style={styles.text}>{card.bank}</Text>
      <Text style={styles.text}>Total invoices: US$ {card.totalInvoices}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleEdit} style={styles.editButton}>
          <Text style={styles.buttonTextEdit}>Edit Card</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleDelete} style={styles.deleteButton}>
          <Text style={styles.buttonTextDelete}>Delete Card</Text>
        </TouchableOpacity>
      </View>
    </View>
    <View style={{ backgroundColor: "#fff",padding: 20 }}>
    <ScrollView>
      <View>
        {extract.filter((item) => item.account == card.name).map((transaction, index) => {
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
  </>
  );
};

export default DetailCreditCard;
