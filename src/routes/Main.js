import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../screens/Home/Home.js";
import { AddRoute } from "./AddAccount.js";
import { ExtractRoute } from "./ExtractRoute.js";

import Add from "../screens/Add/Add";
import { LogoTitle } from "../components/LogoTitle.js";

import HomeIcon from "../assets/home.svg";
import ExtratoIcon from "../assets/extract.svg";
import ContasIcon from "../assets/contas.svg";
import AddIcon from "../assets/add.svg";

const Tab = createBottomTabNavigator();

export function MainRoute() {
  const [visibleBalance, setVisibleBalance] = useState(false);

  const handleToggleBalance = () => {
    setVisibleBalance(!visibleBalance);
  };
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: true,
          tabBarActiveTintColor: "white",
          tabBarActiveBackgroundColor: "#757de8",
          tabBarInactiveTintColor: "white",
          tabBarStyle: {
            backgroundColor: "#2196f3",
            color: "white",
          },
          tabBarIcon: () => {
            switch (route.name) {
              case "Home":
                return <HomeIcon width={24} height={24} />;
              case "Extract":
                return <ExtratoIcon width={24} height={24} />;
              case "Accounts":
                return <ContasIcon width={24} height={24} />;
              case "Add":
                return <AddIcon width={24} height={24} />;
              default:
                return null;
            }
          },
        })}
        initialRouteName="Home"
      >
        <Tab.Screen
          name="Home"
          options={{
            headerStyle: {
              backgroundColor: "#2196f3",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerTitle: (props) => (
              <LogoTitle onToggleBalance={handleToggleBalance} {...props} />
            ),
          }}
        >
          {(props) => <Home visibleBalance={visibleBalance} {...props} />}
        </Tab.Screen>
        <Tab.Screen name="Extract" 
          options={{
              headerStyle:{backgroundColor:"#2196f3"},
              headerTintColor: "#fff"
              }}
          component={ExtractRoute} />
        <Tab.Screen name="Accounts"
          options={{
            headerStyle:{backgroundColor:"#2196f3"},
            headerTintColor: "#fff"
            }}
          component={AddRoute} />
        <Tab.Screen name="Add" 
          options={{
            headerStyle:{backgroundColor:"#2196f3"},
            headerTintColor: "#fff"
            }}
          component={Add} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
