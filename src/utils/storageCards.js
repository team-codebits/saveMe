import AsyncStorage from "@react-native-async-storage/async-storage";

export async function getCards() {
  try {
    const data = await AsyncStorage.getItem("@cards");
    if (data !== null) {
      return JSON.parse(data).map((item) => {
        return {
          ...item,
          date: new Date(item.date),
        };
      });
    }
    jsonData = JSON.stringify([]);
    await AsyncStorage.setItem("@cards", jsonData);
    return [];
  } catch (e) {
    console.error(e);
  }
}

export async function addCards(data) {
  try {
    const storageData = await AsyncStorage.getItem("@cards");
    let list = [];
    if (storageData !== null) {
      list = JSON.parse(storageData);
    }
    list.push(data);
    jsonData = JSON.stringify(list);
    await AsyncStorage.setItem("@cards", jsonData);
  } catch (e) {
    console.error(e);
  }
}

export async function removeCards(index) {
  try {
    const data = await AsyncStorage.getItem("@cards");
    if (data !== null) {
      const list = JSON.parse(data);
      list.splice(index, 1);
      jsonData = JSON.stringify(list);
      await AsyncStorage.setItem("@cards", jsonData);
    }
  } catch (e) {
    console.error(e);
  }
}

export async function updateCards(index, newData) {
  try {
    const data = await AsyncStorage.getItem("@cards");
    if (data !== null) {
      const list = JSON.parse(data);
      list.splice(index, 1, newData);
      jsonData = JSON.stringify(list);
      await AsyncStorage.setItem("@cards", jsonData);
    }
  } catch (e) {
    console.error(e);
  }
}
