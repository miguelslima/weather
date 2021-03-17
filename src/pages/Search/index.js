import React, { useState } from "react";
import { Text, View, Keyboard, TouchableOpacity, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Conditions from "../../components/Conditions";

import api, { key } from "../../services/api";

import {
  Container,
  BackButton,
  SearchBox,
  InputText,
  IconText,
  Header,
  City,
  Date,
  Temp,
} from "./styles";

export default function Search() {
  const navigation = useNavigation();

  const [input, setInput] = useState("");
  const [city, setCity] = useState(null);
  const [addCity, setAddCity] = useState([]);
  const [error, setError] = useState(null);

  async function handleSearch() {
    const response = await api.get(`/weather?key=${key}&city_name=${input}`);

    if (response.data.by === "default") {
      setError("Cidade, não encontrada!");
      setInput("");
      setCity(null);
      Keyboard.dismiss();
      return;
    }

    setCity(response.data);
    setInput("");
    Keyboard.dismiss();
  }

  function handleAddCity() {
    const cityExistInArray = addCity.includes(city);

    if (cityExistInArray) {
      Alert.alert("Cidade já adicionada");
      return;
    }
    setAddCity((addCity) => [...addCity, city]);

    AsyncStorage.setItem("@weater/FavoriteCity", JSON.stringify(addCity));

    Alert.alert("Cidade adicionada");
  }

  if (city) {
    return (
      <Container>
        <BackButton onPress={() => navigation.navigate("Home")}>
          <Feather name="chevron-left" size={32} color="#000" />
          <Text style={{ fontSize: 22 }}>Voltar</Text>
        </BackButton>

        <SearchBox>
          <InputText
            value={input}
            onChangeText={setInput}
            placeholder="Ex: Fortaleza, CE"
          />
          <IconText onPress={handleSearch}>
            <Feather name="search" size={22} color="#FFF" />
          </IconText>
        </SearchBox>

        <Header colors={["#1ed6ff", "#97c1ff"]}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <City>{city.results.city}</City>
            <TouchableOpacity onPress={() => handleAddCity()}>
              <Feather name="plus" size={20} color="#FFF" />
            </TouchableOpacity>
          </View>
          <Date>{city.results.date}</Date>
          <View>
            <Temp>{city.results.temp}°</Temp>
          </View>

          <Conditions weather={city} />
        </Header>
      </Container>
    );
  }
  return (
    <Container>
      <BackButton onPress={() => navigation.navigate("Home")}>
        <Feather name="chevron-left" size={32} color="#000" />
        <Text style={{ fontSize: 22 }}>Voltar</Text>
      </BackButton>

      <SearchBox>
        <InputText
          value={input}
          onChangeText={setInput}
          placeholder="Ex: Fortaleza, CE"
        />
        <IconText onPress={handleSearch}>
          <Feather name="search" size={22} color="#FFF" />
        </IconText>
      </SearchBox>

      {error && <Text style={{ marginTop: 25, fontSize: 18 }}>{error}</Text>}
    </Container>
  );
}
