import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ExtractS from "../screens/Extract/Extract";
import ExtractDetail from "../screens/ExtractDetail/ExtractDetail";
import EditForm from "../screens/ExtractDetail/formEdit";

const Stack = createStackNavigator();

export function ExtractRoute() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ExtractS" component={ExtractS} />
      <Stack.Screen name="ExtractDetail" component={ExtractDetail} />
      <Stack.Screen name="EditForm" component={EditForm} />
    </Stack.Navigator>
  );
}
