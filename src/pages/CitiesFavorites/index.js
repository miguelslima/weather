import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";

import { condition } from "../../utils/condition";

import { Container, BackButton } from "./styles";

export default function CitiesFavorites() {
  const [cities, setCities] = useState([]);
  let icon = condition(cities.condition_slug);

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
      <Container>
        <BackButton onPress={() => navigation.navigate("Home")}>
          <Feather name="chevron-left" size={32} color="#000" />
          <Text style={{ fontSize: 22 }}>Voltar</Text>
        </BackButton>

        {cities.length > 0 &&
          cities.map((city, index) => (
            <View
              key={index}
              style={{
                width: "50%",
                backgroundColor: "#aaa",
                margin: 20,
                padding: 15,
                borderRadius: 10,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginBottom: 30,
                }}
              >
                <Text>{city.results.forecast[0].max} °</Text>
                <Ionicons name={icon.name} color={icon.color} size={25} />
              </View>
              <Text>{city.results.city}</Text>
            </View>
          ))}
      </Container>
    );
  } else {
    return <View />;
  }
}
