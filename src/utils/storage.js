import AsyncStorage from "@react-native-async-storage/async-storage";

export async function getReceitasEDespesas() {
  try {
    const data = await AsyncStorage.getItem("@receitas_despesas");
    if (data !== null) {
      return JSON.parse(data).map(item => {
        return {
          ...item,
          date: new Date(item.date)
        }
      }) 
    }
    jsonData = JSON.stringify([]);
    await AsyncStorage.setItem("@receitas_despesas", jsonData);
    return [];
  } catch (e) {
    console.error(e);
  }
}

export async function addReceitasEDespesas(data) {
  try {
    const storageData = await AsyncStorage.getItem("@receitas_despesas");
    let list = [];
    if (storageData !== null) {
      list = JSON.parse(storageData);
    }
    list.push(data);
    jsonData = JSON.stringify(list);
    await AsyncStorage.setItem("@receitas_despesas", jsonData);
  } catch (e) {
    console.error(e);
  }
}

export async function removeReceitasEDespesas(index) {
  try {
    const data = await AsyncStorage.getItem("@receitas_despesas");
    if (data !== null) {
      const list = JSON.parse(data);
      list.splice(index, 1);
      jsonData = JSON.stringify(list);
      await AsyncStorage.setItem("@receitas_despesas", jsonData);
    }
  } catch (e) {
    console.error(e);
  }
}

export async function updateReceitasEDespesas(index, newData) {
  try {
    const data = await AsyncStorage.getItem("@receitas_despesas");
    if (data !== null) {
      const list = JSON.parse(data);
      list.splice(index, 1, newData);
      jsonData = JSON.stringify(list);
      await AsyncStorage.setItem("@receitas_despesas", jsonData);
    }
  } catch (e) {
    console.error(e);
  }
}
