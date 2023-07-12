import AsyncStorage from "@react-native-async-storage/async-storage";

export async function getRevenuesAndExpenses() {
  try {
    const data = await AsyncStorage.getItem("@revenues_expenses");
    if (data !== null) {
      return JSON.parse(data).map(item => {
        return {
          ...item,
          date: new Date(item.date)
        }
      }) 
    }
    jsonData = JSON.stringify([]);
    await AsyncStorage.setItem("@revenues_expenses", jsonData);
    return [];
  } catch (e) {
    console.error(e);
  }
}

export async function addRevenuesAndExpenses(data) {
  try {
    const storageData = await AsyncStorage.getItem("@revenues_expenses");
    let list = [];
    if (storageData !== null) {
      list = JSON.parse(storageData);
    }
    list.push(data);
    jsonData = JSON.stringify(list);
    await AsyncStorage.setItem("@revenues_expenses", jsonData);
  } catch (e) {
    console.error(e);
  }
}

export async function removeRevenuesAndExpenses(index) {
  try {
    const data = await AsyncStorage.getItem("@revenues_expenses");
    if (data !== null) {
      const list = JSON.parse(data);
      list.splice(index, 1);
      jsonData = JSON.stringify(list);
      await AsyncStorage.setItem("@revenues_expenses", jsonData);
    }
  } catch (e) {
    console.error(e);
  }
}

export async function updateRevenuesAndExpenses(index, newData) {
  try {
    const data = await AsyncStorage.getItem("@revenues_expenses");
    if (data !== null) {
      const list = JSON.parse(data);
      list.splice(index, 1, newData);
      jsonData = JSON.stringify(list);
      await AsyncStorage.setItem("@revenues_expenses", jsonData);
    }
  } catch (e) {
    console.error(e);
  }
}
