import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";

import AddIcon from "../../assets/add.svg";
import styles from "../../styles/listsStyle";
import { useExtractStore } from "../../stores/ExtractStore.js";
import { TouchableOpacity } from "react-native-gesture-handler";
import AddTransaction from "../../components/Forms/AddTransaction";

export default function Extracts() {
  const navigation = useNavigation();

  const extract = useExtractStore((state) => state.extract);
  const fetchExtract = useExtractStore((state) => state.fetchExtract);

  useEffect(() => {
    fetchExtract();
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      fetchExtract();
    }, [])
  );

  return (
    <View style={styles.container}>
      {extract.map((transaction, index) => {
        return (
          <View key={index}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("DetailTransaction", {
                  transaction,
                  index,
                });
              }}
            >
              <View style={styles.item}>
                <Text style={styles.item__leftText}>
                  {transaction.name}
                  {"\n"}
                  <Text
                    style={
                      transaction.selectedOption === "revenue"
                        ? styles.item__leftText$$revenue
                        : styles.item__leftText$$expense
                    }
                  >
                    {"US$"}
                    {transaction.value}
                  </Text>
                </Text>

                <Text style={styles.item__date}>
                  {transaction.date.getDate()}/{transaction.date.getMonth()}/
                  {transaction.date.getFullYear()}
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
          onPress={() =>
            navigation.navigate("FormsScreen", { component: <AddTransaction /> })
          }
        >
          <AddIcon width={24} height={24} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
