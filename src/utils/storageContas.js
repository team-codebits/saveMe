import AsyncStorage from "@react-native-async-storage/async-storage";

export async function getContas() {
  try {
    const data = await AsyncStorage.getItem("@contas");
    if (data !== null) {
      return JSON.parse(data).map(item => {
        return {
          ...item,
          date: new Date(item.date)
        }
      }) 
    }
    jsonData = JSON.stringify([]);
    await AsyncStorage.setItem("@contas", jsonData);
    return [];
  } catch (e) {
    console.error(e);
  }
}

export async function addContas(data) {
  try {
    const storageData = await AsyncStorage.getItem("@contas");
    let list = [];
    if (storageData !== null) {
      list = JSON.parse(storageData);
    }
    list.push(data);
    jsonData = JSON.stringify(list);
    await AsyncStorage.setItem("@contas", jsonData);
  } catch (e) {
    console.error(e);
  }
}

export async function removeContas(index) {
  try {
    const data = await AsyncStorage.getItem("@contas");
    if (data !== null) {
      const list = JSON.parse(data);
      list.splice(index, 1);
      jsonData = JSON.stringify(list);
      await AsyncStorage.setItem("@contas", jsonData);
    }
  } catch (e) {
    console.error(e);
  }
}

export async function updateContas(index, newData) {
  try {
    const data = await AsyncStorage.getItem("@contas");
    if (data !== null) {
      const list = JSON.parse(data);
      list.splice(index, 1, newData);
      jsonData = JSON.stringify(list);
      await AsyncStorage.setItem("@contas", jsonData);
    }
  } catch (e) {
    console.error(e);
  }
}
