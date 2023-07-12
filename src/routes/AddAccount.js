import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import Accounts from "../screens/Accounts/Accounts";
import AddCreditCard from "../screens/AddCreditCard/AddCreditCard";
import AddBankAccount from "../screens/AddBankAccount/AddBankAccount";
import DetailBankAccount from "../screens/DetailBankAccount/DetailBankAccount";
import DetailCreditCard from "../screens/DetailCreditCard/DetailCreditCard";
import EditBankAccount from "../screens/EditBankAccount/EditBankAccount";
import EditCreditCard from "../screens/EditCreditCard/EditCreditCard";
import ViewCard from "../screens/ViewCard/ViewCard";

const Stack = createStackNavigator();

export function AddRoute() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MainCounts" component={Accounts} />
      <Stack.Screen
        name="AddBankAccount"
        component={AddBankAccount}
      />
      <Stack.Screen
        name="AddCreditCard"
        component={AddCreditCard}
      />
      <Stack.Screen
        name="DetailBankAccount"
        component={DetailBankAccount}
      />
      <Stack.Screen
        name="DetailCreditCard"
        component={DetailCreditCard}
      />
      <Stack.Screen
        name="EditBankAccount"
        component={EditBankAccount}
      />
      <Stack.Screen
        name="EditCreditCard"
        component={EditCreditCard}
      />
      <Stack.Screen name="Card" component={ViewCard} />
    </Stack.Navigator>
  );
}
