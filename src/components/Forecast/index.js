import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { condition } from "../../utils/condition";

import { Container, Date, Temp, TempMax } from "./styles";

export default function Forecast({ data }) {
  let icon = condition(data.condition);

  return (
    <Container>
      <Date>{data.date}</Date>

      <Ionicons name={icon.name} color={icon.color} size={25} />

      <Temp>
        <Text>{data.min}°</Text>
        <TempMax>{data.max}°</TempMax>
      </Temp>
    </Container>
  );
}
