import React from "react";

import { Ionicons } from "@expo/vector-icons";
import Conditions from "../Conditions";

import { Container, City, Description, Date, Temp } from "./styles";

export default function Header({ background, weather, icon }) {
  return (
    <>
      <City> {weather.results.city}</City>
      <Container>
        <Ionicons name={icon.name} color={icon.color} size={120} />
        <Description>{weather.results.description}</Description>
        <Date> {weather.results.date}</Date>
        <Temp>{weather.results.temp}°</Temp>

        <Conditions background={background} weather={weather} />
      </Container>
    </>
  );
}
