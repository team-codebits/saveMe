import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../screens/Home/Home.js";
import { AdicionarRoute } from "./AdicionarConta.js";
import { ExtratoRoute } from "./ExtratoRoute.js";

import Adicionar from "../screens/Adicionar/Adicionar";
import { LogoTitle } from "../components/LogoTitle.js";

import HomeIcon from "../assets/home.svg";
import ExtratoIcon from "../assets/extrato.svg";
import ContasIcon from "../assets/contas.svg";
import AddIcon from "../assets/add.svg";

const Tab = createBottomTabNavigator();

export function MainRoute() {
  const [saldoVisivel, setSaldoVisivel] = useState(false);

  const handleToggleSaldo = () => {
    setSaldoVisivel(!saldoVisivel);
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
              case "Extrato":
                return <ExtratoIcon width={24} height={24} />;
              case "Contas":
                return <ContasIcon width={24} height={24} />;
              case "Adicionar":
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
              <LogoTitle onToggleSaldo={handleToggleSaldo} {...props} />
            ),
          }}
        >
          {(props) => <Home saldoVisivel={saldoVisivel} {...props} />}
        </Tab.Screen>
        <Tab.Screen name="Extrato" 
          options={{
              headerStyle:{backgroundColor:"#2196f3"},
              headerTintColor: "#fff"
              }}
          component={ExtratoRoute} />
        <Tab.Screen name="Contas"
          options={{
            headerStyle:{backgroundColor:"#2196f3"},
            headerTintColor: "#fff"
            }}
          component={AdicionarRoute} />
        <Tab.Screen name="Adicionar" 
          options={{
            headerStyle:{backgroundColor:"#2196f3"},
            headerTintColor: "#fff"
            }}
          component={Adicionar} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
