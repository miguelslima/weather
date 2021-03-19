import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, View } from "react-native";
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
        await AsyncStorage.getItem("@weater/FavoriteCity").then((value) => {
          if (value === null) {
            return;
          } 
          setCities(JSON.parse(value));
        });
      } catch (e) {
        console.log(e);
      }
    };

    getData();
  }, [navigation, cities]);

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
              <CityContainer
                key={index}
                onPress={() =>
                  navigation.navigate("DetailsCityFavorite", {
                    cityName: city.results.city,
                  })
                }
              >
                <CityContainerTop>
                  <Text style={{ fontSize: 16, color: "#fff" }}>
                    {city.results.forecast[0].max} °
                  </Text>
                  <Ionicons
                    name={condition(city.results.condition_slug).name}
                    color={condition(city.results.condition_slug).color}
                    size={25}
                  />
                </CityContainerTop>
                <Text style={{ fontSize: 18, color: "#fff" }}>
                  {city.results.city}
                </Text>
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

        <TouchableOpacity onPress={() => navigation.navigate("Search")}>
          <Text>Adicione aqui uma cidade favorita</Text>
        </TouchableOpacity>
      </Container>
    );
  }
}
