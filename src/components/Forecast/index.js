import React from "react";
import { Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { condition } from "../../utils/condition";

import { Container, Date, Temp, TempMax, Weekday } from "./styles";

export default function Forecast({ data, vertical }) {
  // let icon = condition(data.condition);

  return (
    <Container vertical={vertical}>
      <Weekday vertical={vertical}>{data.weekday}</Weekday>

      <Ionicons
        name={condition(data.condition).name}
        color={icon.color}
        size={25}
      />

      <Temp vertical={vertical}>
        <Text>{data.min}°</Text>
        <TempMax vertical={vertical}>{data.max}°</TempMax>
      </Temp>
      <Date vertical={vertical}>{data.date}</Date>
    </Container>
  );
}
