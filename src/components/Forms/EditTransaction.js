import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Button,
} from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';

import styles from "../../styles/EditFormsStyle.js"
import { updateRevenuesAndExpenses } from "../../utils/storage.js";

export default function EditTransaction({ route, navigation }) {
  const { transaction, index } = route.params;
  const [name, setName] = useState(transaction.name);
  const [value, setValue] = useState(transaction.value.toString());
  const [type, setType] = useState(transaction.type);
  const [account, setAccount] = useState(transaction.account);
  const [date, setDate] = useState(transaction.date);
  const [selectedOption, setSelectedOption] = useState(transaction.selectedOption);
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showDatepicker = () => {
    setShow(true);
  };

  useEffect(() => {
    if (transaction) {
      setName(transaction.name);
      setValue(transaction.value);
      setType(transaction.type);
      setAccount(transaction.account);
      setDate(transaction.date);
      setSelectedOption(transaction.selectedOption);
    }
  }, [transaction]);

  const handleSelectedOption = (option) => {
    setSelectedOption(option);
  };

  async function handleSubmit() {
    if (
      name === "" ||
      value === "" ||
      account === "" ||
      date === "" ||
      type === "" ||
      selectedOption === null ||
      !Number(value) ||
      Number(value) < 0
    ) {
      Alert.alert("Fill in all the fields");
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

    console.log(data);

    await updateRevenuesAndExpenses(index, data); // Call AsyncStorage's update function

    onSave(data);

    Alert.alert("Success", "Changes have been successfully saved!");

    setName("");
    setValue("");
    setType("");
    setAccount("");
    setDate("");
    setSelectedOption(null);

    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Edit Transaction</Text>
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
      <TextInput
        style={styles.input}
        value={account}
        placeholder="Account"
        onChangeText={setAccount}
      ></TextInput>
      <View>
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

      <View style={styles.buttonsView}>
        <Button title="Save" onPress={handleSubmit} />
        <Button
          color="#757de8"
          title="Back"
          onPress={() => {
            navigation.goBack();
          }}
        ></Button>
      </View>
    </View>
  );
}
