import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "../pages/Home";
import Search from "../pages/Search";
import NextDay from "../pages/NextDay";
import CitiesFavorites from "../pages/CitiesFavorites";

const Drawer = createDrawerNavigator();

function Routes() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          title: "Minha cidade",
        }}
      />
      <Drawer.Screen
        name="Search"
        component={Search}
        options={{ title: "Procurar cidade" }}
      />
      <Drawer.Screen
        name="NextDay"
        component={NextDay}
        options={{ title: "Previsão próximos dias" }}
      />
      <Drawer.Screen
        name="CitiesFavorites"
        component={CitiesFavorites}
        options={{ title: "Cidades Favoritas" }}
      />
    </Drawer.Navigator>
  );
}

export default Routes;
