import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, FlatList } from "react-native";
import * as Location from "expo-location";

import Forecast from "../../components/Forecast";
import Header from "../../components/Header";
import Menu from "../../components/Menu";

import api, { key } from "../../services/api";
import Loading from "../../components/Loading";

import { Container, List } from "./styles";

export default function Home() {
  const [errorMessage, setErroMessage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [weather, setWeather] = useState([]);
  const [icon, setIcon] = useState({ name: "cloud", color: "#fff" });
  const [background, setBackground] = useState(["#1ed6ff", "#97c1ff"]);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();

      if (status !== "granted") {
        setErroMessage("Permissão negada para acesso à localização");
        setLoading(false);
        return;
      }

      let location = await Location.getCurrentPositionAsync({});

      const response = await api.get(
        `/weather?array_limit=5&key=${key}&fields=temp,date,time,condition_code,description,city,humidity,wind_speedy,sunrise,sunset,condition_slug,city_name,forecast,max,min,date&lat=${location.coords.latitude}&lon=${location.coords.longitude}`
      );

      setWeather(response.data);

      if (response.data.results.currently === "noite") {
        setBackground(["#0c3741", "#0f2f61"]);
      }

      switch (response.data.results.condition_slug) {
        case "clear_day":
          setIcon({ name: "partly-sunny", color: "#FFB300" });
          break;
        case "rain":
          setIcon({ name: "rainy", color: "#FFF" });
          break;
        case "storm":
          setIcon({ name: "rainy", color: "#FFF" });
          break;
      }

      setLoading(false);
    })();
  }, []);

  if (loading) {
    return (
      <Container>
        <Loading />
      </Container>
    );
  }

  return (
    <Container>
      <Menu />
      <Header background={background} weather={weather} icon={icon} />

      <Text style={{ marginVertical: 10, fontSize: 18 }}>
        Veja previsão para os próximos 10 dias
      </Text>

      <List
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: "5%" }}
        data={weather.results.forecast}
        keyExtractor={(item) => item.date}
        renderItem={({ item }) => <Forecast data={item} />}
      />
    </Container>
  );
}
