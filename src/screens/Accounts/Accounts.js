import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, TouchableOpacity, Alert } from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import AddIcon from "../../assets/add.svg";
import EditIcon from "../../assets/edit.svg";
import DeleteIcon from "../../assets/delete_white.svg";
import styles from "./styles.js";

import { useAccountsStore } from "../../stores/AccountsStore.js";
import { useCardStore } from "../../stores/CardsStore.js";

import { removeAccounts } from "../../utils/storageAccounts";
import { removeCards } from "../../utils/storageCards";

const Accounts = ({ navigation }) => {
  const listAccounts = useAccountsStore((state) => state.listAccounts);
  const fetchAccounts = useAccountsStore((state) => state.fetchAccounts);
  const listCards = useCardStore((state) => state.listCards);
  const fetchCards = useCardStore((state) => state.fetchCards);

  const [updatedAccounts, setUpdatedAccounts] = useState(false);

  useEffect(() => {
    fetchAccounts();
    fetchCards();
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      fetchAccounts();
      fetchCards();
    }, [updatedAccounts])
  );

  const dialogDeleteCard = (index) => {
    Alert.alert("Delete card", "Do you really want to delete?", [
      {
        text: "Cancel",
      },
      {
        text: "Confirm",
        onPress: () => {
          fetchCards();
          removeCards(index);
        },
      },
    ]);
  };

  const dialogDetails = (account) => {
    Alert.alert(account.name, account.type_account);
  };

  const dialogDeleteAccount = (index) => {
    Alert.alert("Delete account", "Do you really want to delete?", [
      {
        text: "Cancel",
      },
      {
        text: "Confirm",
        onPress: async () => {
          removeAccounts(index);
          setUpdatedAccounts(true);
        },
      },
    ]);
  };

  return (
    <>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <ScrollView style={styles.containerScroll}>
          <Text style={styles.textTitle}>Bank Accounts</Text>

          {listAccounts.map((account, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() =>  navigation.navigate("DetailBankAccount", { account })}
              >
                <View style={styles.contaBancaria}>
                  <Text style={[styles.cardText, styles.cardTextTitle]}>
                    {account.bank}
                  </Text>
                  <Text style={styles.cardText}>US$ {account.balance}</Text>

                  <View style={styles.cardIcons}>
                    {/* Edit button*/}
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate("EditBankAccount", { index, account })
                      }
                    >
                      <EditIcon width={20} height={20} />
                    </TouchableOpacity>

                    {/* Delete button */}
                    <TouchableOpacity onPress={() => dialogDeleteAccount(index)}>
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
              onPress={() => navigation.navigate("AddBankAccount")}
            >
              <AddIcon width={24} height={24} />
            </TouchableOpacity>
          </View>
        </ScrollView>

        <ScrollView style={styles.containerScroll}>
          <Text style={styles.textTitle}>Credit Cards</Text>
          {listCards.map((card, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() =>
                  navigation.navigate("DetailCreditCard", { card, index })
                }
              >
                <View style={styles.cardCartao}>
                  <Text style={[styles.cardText, styles.cardTextTitle]}>
                    {card.name}
                  </Text>
                  <Text style={styles.cardText}>US$ {card.totalInvoices}</Text>

                  <View style={styles.cardIcons}>
                    {/* Edit button*/}
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate("EditCreditCard", { index, card })
                      }
                    >
                      <EditIcon width={20} height={20} />
                    </TouchableOpacity>

                    {/* Delete button */}
                    <TouchableOpacity onPress={() => dialogDeleteCard(index)}>
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
              onPress={() => navigation.navigate("AddCreditCard")}
            >
              <AddIcon width={24} height={24} />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default Accounts;
