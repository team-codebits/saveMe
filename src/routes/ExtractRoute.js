import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ExtractS from "../screens/Extract/Extract";
import DetailTransaction from "../screens/DetailTransaction/DetailTransaction";
import EditTransaction from "../components/Forms/EditTransaction";
import FormsScreen from "../screens/FormsScreen/FormsScreen";

const Stack = createStackNavigator();

export function ExtractRoute() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ExtractS" component={ExtractS} />
      <Stack.Screen name="DetailTransaction" component={DetailTransaction} />
      <Stack.Screen name="EditTransaction" component={EditTransaction} />
      <Stack.Screen name="FormsScreen" component={FormsScreen} />
    </Stack.Navigator>
  );
}
