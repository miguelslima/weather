import React from "react";
import { View } from "react-native";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";

import {
  Container,
  Condition,
  ConditionTop,
  ConditionText,
  BorderTop,
} from "./styles";

export default function Conditions({ background, weather }) {
  return (
    <Container>
      <BorderTop>
        <ConditionTop>
          <Feather name="wind" size={27} color="#fff" />
          <ConditionText>{weather.results.wind_speedy}</ConditionText>
        </ConditionTop>

        <Condition>
          <MaterialCommunityIcons
            name="weather-sunset-up"
            size={27}
            color="#fff"
          />
          <ConditionText>{weather.results.sunrise}</ConditionText>
        </Condition>
      </BorderTop>

      <View style={{ width: "50%" }}>
        <ConditionTop> 
          <Feather name="droplet" size={27} color="#fff" />
          <ConditionText>{weather.results.humidity}</ConditionText>
        </ConditionTop>

        <Condition>
          <MaterialCommunityIcons
            name="weather-sunset-down"
            size={27}
            color="#fff"
          />
          <ConditionText>{weather.results.sunset}</ConditionText>
        </Condition>
      </View>
    </Container>
  );
}
