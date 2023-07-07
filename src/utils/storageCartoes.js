import AsyncStorage from "@react-native-async-storage/async-storage";

export async function getCartoes() {
  try {
    const data = await AsyncStorage.getItem("@cartoes");
    if (data !== null) {
      return JSON.parse(data).map((item) => {
        return {
          ...item,
          date: new Date(item.date),
        };
      });
    }
    jsonData = JSON.stringify([]);
    await AsyncStorage.setItem("@cartoes", jsonData);
    return [];
  } catch (e) {
    console.error(e);
  }
}

export async function addCartoes(data) {
  try {
    const storageData = await AsyncStorage.getItem("@cartoes");
    let list = [];
    if (storageData !== null) {
      list = JSON.parse(storageData);
    }
    list.push(data);
    jsonData = JSON.stringify(list);
    await AsyncStorage.setItem("@cartoes", jsonData);
  } catch (e) {
    console.error(e);
  }
}

export async function removeCartoes(index) {
  try {
    const data = await AsyncStorage.getItem("@cartoes");
    if (data !== null) {
      const list = JSON.parse(data);
      list.splice(index, 1);
      jsonData = JSON.stringify(list);
      await AsyncStorage.setItem("@cartoes", jsonData);
    }
  } catch (e) {
    console.error(e);
  }
}

export async function updateCartoes(index, newData) {
  try {
    const data = await AsyncStorage.getItem("@cartoes");
    if (data !== null) {
      const list = JSON.parse(data);
      list.splice(index, 1, newData);
      jsonData = JSON.stringify(list);
      await AsyncStorage.setItem("@cartoes", jsonData);
    }
  } catch (e) {
    console.error(e);
  }
}
