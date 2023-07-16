import React, { useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";

import AddIcon from "../../assets/add.svg";
import styles from "../../styles/listsStyle";
import { useAccountsCardStore } from "../../stores/CardsStore.js";
import AddAccount from "../../components/Forms/AddAccount";

const Accounts = ({ navigation }) => {
  const listAccountsCards = useAccountsCardStore(
    (state) => state.listAccountsCards
  );
  const fetchAccountsCards = useAccountsCardStore(
    (state) => state.fetchAccountsCards
  );

  useEffect(() => {
    fetchAccountsCards();
  }, []);

  return (
    <View style={styles.container}>
      <>
        {listAccountsCards.map((account, index) => {
          return (
            <View key={index}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("DetailAccount", { account, index });
                }}
              >
                <View style={styles.item}>
                  <Text style={styles.item__leftText}>
                    {account.name}
                    {"\n"}
                    <Text>
                      {"Bank:"} {account.bank}
                    </Text>
                  </Text>
                </View>
              </TouchableOpacity>
              <View style={styles.divider}></View>
            </View>
          );
        })}
        <View style={styles.addButtonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("FormsScreen", { component: <AddAccount /> })}
          >
            <AddIcon width={24} height={24} />
          </TouchableOpacity>
        </View>
      </>
    </View>
  );
};

export default Accounts;
