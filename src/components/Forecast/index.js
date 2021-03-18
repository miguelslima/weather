import React from "react";
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { condition } from "../../utils/condition";

import { Container, Date, Temp, TempMax, Weekday } from "./styles";

export default function Forecast({ data, vertical }) {
  // let icon = condition(data.condition);
  return (
    <Container vertical={vertical}>
      <Weekday vertical={vertical}>{data.weekday}</Weekday>

      <Temp vertical={vertical}>
        <Text>{data.min}°</Text>
        <TempMax vertical={vertical}>{data.max}°</TempMax>
      </Temp>

      {vertical ? (
        <View
          vertical={vertical}
          style={{ flexDirection: "row", alignItems: "center", width: 180 }}
        >
          <Ionicons
            name={condition(data.condition).name}
            color={icon.color}
            size={25}
          />
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={{ marginLeft: 10, fontSize: 12 }}
          >
            {data.description}
          </Text>
        </View>
      ) : (
        <Ionicons
          name={condition(data.condition).name}
          color={icon.color}
          size={25}
        />
      )}
    </Container>
  );
}
