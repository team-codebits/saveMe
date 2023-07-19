import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";

import styles from "../../styles/AddTransactionStyle";
import { addRevenuesAndExpenses } from "../../utils/storage.js";
import { useAccountsCardStore } from "../../stores/CardsStore.js";

export default function Form() {
  const [name, setName] = useState("");
  const [value, setValue] = useState("");
  const [type, setType] = useState("");
  const [account, setAccount] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);

  const [date, setDate] = useState(new Date(Date.now()));
  const [show, setShow] = useState(false);

  const listAccountsCards = useAccountsCardStore(
    (state) => state.listAccountsCards
  );
  const fetchAccountsCards = useAccountsCardStore(
    (state) => state.fetchAccountsCards
  );

  useEffect(() => {
    fetchAccountsCards();
  }, []);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showDatepicker = () => {
    setShow(true);
  };

  const handleSelectedOption = (option) => {
    setSelectedOption(option);
  };

  useEffect(() => {
    if (Platform.OS === "android") {
      setShow(false);
    } else {
      setShow(true);
    }
  }, []);

  function resetForm() {
    setName("");
    setValue("");
    setType("");
    setAccount("");
    setSelectedOption(null);
    setDate(new Date(Date.now()));
  }

  function handleSubmit() {
    if (
      name === "" ||
      value === "" ||
      account === "" ||
      date === null ||
      type === "" ||
      selectedOption === null ||
      !Number(value) ||
      Number(value) < 0
    ) {
      Alert.alert("Fill in all fields validly!");
      return;
    }

    const data = {
      name,
      value,
      type,
      account,
      date,
      selectedOption,
    };
    addRevenuesAndExpenses(data);

    resetForm();
  }

  console.log(account)

  return (
    <View>
      <TextInput
        style={styles.input}
        value={name}
        placeholder="Name"
        onChangeText={setName}
      ></TextInput>

      <TextInput
        style={styles.input}
        value={value}
        placeholder="Value"
        onChangeText={setValue}
      ></TextInput>

      <TextInput
        style={styles.input}
        value={type}
        placeholder="Type"
        onChangeText={setType}
      ></TextInput>

      <Text>Select the account: </Text>
      <View style={styles.input}>
        <Picker
          selectedValue={listAccountsCards[0]}
          onValueChange={(itemValue, itemIndex) => setAccount(itemValue)}
        >
          {listAccountsCards.map((item, index) => {
            return (
              <Picker.Item value={item.name} label={item.name} key={index} />
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
                ? "Select date"
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
            selectedOption === "expense"
              ? styles.inactiveOption
              : styles.buttonSelectedR,
          ]}
          onPress={() => handleSelectedOption("revenue")}
        >
          <Text style={styles.buttonLabel}>Revenue</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.button,
            selectedOption === "revenue"
              ? styles.inactiveOption
              : styles.buttonSelectedE,
          ]}
          onPress={() => handleSelectedOption("expense")}
        >
          <Text style={styles.buttonLabel}>Expense</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.inputAdd} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
}
