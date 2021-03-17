import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { Text, View } from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";

import { condition } from "../../utils/condition";

import {
  Container,
  BackButton,
  Title,
  CardContainer,
  CityContainer,
  CityContainerTop,
} from "./styles";

export default function CitiesFavorites() {
  const navigation = useNavigation();
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

  console.log(cities);

  if (cities.length > 0) {
    return (
      <Container>
        <BackButton onPress={() => navigation.navigate("Home")}>
          <Feather name="chevron-left" size={32} color="#000" />
          <Text style={{ fontSize: 22 }}>Voltar</Text>
        </BackButton>

        <Title>Cidade favoritadas</Title>

        <CardContainer>
          {cities.length > 0 &&
            cities.map((city, index) => (
              <CityContainer key={index}>
                <CityContainerTop>
                  <Text>{city.results.forecast[0].max} °</Text>
                  <Ionicons
                    name={condition(city.results.condition_slug).name}
                    color={condition(city.results.condition_slug).color}
                    size={25}
                  />
                </CityContainerTop>
                <Text>{city.results.city}</Text>
              </CityContainer>
            ))}
        </CardContainer>
      </Container>
    );
  } else {
    return (
      <Container>
        <BackButton onPress={() => navigation.navigate("Home")}>
          <Feather name="chevron-left" size={32} color="#000" />
          <Text style={{ fontSize: 22 }}>Voltar</Text>
        </BackButton>

        <Title>Sem cidades favoritas</Title>
      </Container>
    );
  }
}
