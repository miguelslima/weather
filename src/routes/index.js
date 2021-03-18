import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "../pages/Home";
import Search from "../pages/Search";
import NextDay from "../pages/NextDay";
import CitiesFavorites from "../pages/CitiesFavorites";
import DetailsCityFavorite from "../pages/DetailsCityFavorite";

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
        name="CitiesFavorites"
        component={CitiesFavorites}
        options={{ title: "Cidades Favoritas" }}
      />
      <Drawer.Screen
        name="NextDay"
        component={NextDay}
        options={{ title: "" }}
      />
      <Drawer.Screen
        name="DetailsCityFavorite"
        component={DetailsCityFavorite}
        options={{ title: "" }}
      />
    </Drawer.Navigator>
  );
}

export default Routes;
