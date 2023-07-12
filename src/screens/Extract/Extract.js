import React, { useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { View, Text, ScrollView } from "react-native";

import styles from "./styles.js";
import { getRevenuesAndExpenses } from "../../utils/storage.js";
import { useExtractStore } from "../../stores/ExtractStore.js";
import { TouchableOpacity } from "react-native-gesture-handler";

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
      <ScrollView>
        <View>
          {extract.map((transaction, index) => {
            return (
              <View key={index}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("ExtractDetail", { transaction, index });
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
                <View style={styles.me}></View>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}
