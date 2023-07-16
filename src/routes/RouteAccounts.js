import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import Accounts from "../screens/Accounts/Accounts";
import FormsScreen from "../screens/FormsScreen/FormsScreen";
import AddAccount from "../components/Forms/AddAccount";
import DetailAccount from "../screens/DetailAccount/DetailAccount";
import EditAccount from "../components/Forms/EditAccount";

const Stack = createStackNavigator();

export function AddRoute() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MainCounts" component={Accounts} />
      <Stack.Screen name="FormsScreen" component={FormsScreen} />
      <Stack.Screen name="AddAccount" component={AddAccount} />
      <Stack.Screen name="DetailAccount" component={DetailAccount} />
      <Stack.Screen name="EditAccount" component={EditAccount} />
    </Stack.Navigator>
  );
}
