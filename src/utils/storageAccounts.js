import AsyncStorage from "@react-native-async-storage/async-storage";

export async function getAccounts() {
  try {
    const data = await AsyncStorage.getItem("@accounts");
    if (data !== null) {
      return JSON.parse(data).map(item => {
        return {
          ...item,
          date: new Date(item.date)
        }
      }) 
    }
    jsonData = JSON.stringify([]);
    await AsyncStorage.setItem("@accounts", jsonData);
    return [];
  } catch (e) {
    console.error(e);
  }
}

export async function addAccounts(data) {
  try {
    const storageData = await AsyncStorage.getItem("@accounts");
    let list = [];
    if (storageData !== null) {
      list = JSON.parse(storageData);
    }
    list.push(data);
    jsonData = JSON.stringify(list);
    await AsyncStorage.setItem("@accounts", jsonData);
  } catch (e) {
    console.error(e);
  }
}

export async function removeAccounts(index) {
  try {
    const data = await AsyncStorage.getItem("@accounts");
    if (data !== null) {
      const list = JSON.parse(data);
      list.splice(index, 1);
      jsonData = JSON.stringify(list);
      await AsyncStorage.setItem("@accounts", jsonData);
    }
  } catch (e) {
    console.error(e);
  }
}

export async function updateAccounts(index, newData) {
  try {
    const data = await AsyncStorage.getItem("@accounts");
    if (data !== null) {
      const list = JSON.parse(data);
      list.splice(index, 1, newData);
      jsonData = JSON.stringify(list);
      await AsyncStorage.setItem("@accounts", jsonData);
    }
  } catch (e) {
    console.error(e);
  }
}
