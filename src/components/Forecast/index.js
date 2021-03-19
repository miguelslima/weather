import React from "react";
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { condition } from "../../utils/condition";

import { Container, Date, Temp, TempMax, Weekday } from "./styles";

export default function Forecast({ data, vertical }) {
  let icon = condition(data.condition);

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
          style={{
            flexDirection: "row",
            alignItems: "center",
            width: 140,
            justifyContent: "space-between",
          }}
        >
          <Ionicons name={icon.name} color={icon.color} size={25} />
          <Text
            numberOfLines={2}
            ellipsizeMode="tail"
            style={{ marginLeft: 10, fontSize: 14, textAlign: "center" }}
          >
            {data.description}
          </Text>
        </View>
      ) : (
        <Ionicons name={icon.name} color={icon.color} size={25} />
      )}
    </Container>
  );
}
