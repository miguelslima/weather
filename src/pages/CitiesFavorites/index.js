import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";

export default function CitiesFavorites() {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        await AsyncStorage.getItem("@weater/FavoriteCity").then(
          (value) =>
            //AsyncStorage returns a promise so adding a callback to get the value
            setCities(JSON.parse(value))

          //Setting the value in Text
        );
      } catch (e) {
        console.log(e);
      }
    };

    getData();
  }, []);

  if (cities.length > 0) {
    return (
      <View>
        {cities.length > 0 &&
          cities.map((city) => <Text>{city.results.city}</Text>)}
      </View>
    );
  } else {
    return <View />;
  }
}
