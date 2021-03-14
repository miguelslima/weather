import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";

export default function Conditions({ background, weather }) {
  return (
    <View style={styles.container}>
      <View
        style={{ width: "50%", borderRightWidth: 1, borderRightColor: "#FFF" }}
      >
        <View style={styles.condition, {borderBottomWidth: 1}}>
          <Feather name="wind" size={27} color="#f0f0f0" />
          <Text>{weather.results.wind_speedy}</Text>
        </View>

        <View style={styles.condition}>
          <MaterialCommunityIcons
            name="weather-sunset-up"
            size={27}
            color="#f0f0f0"
          />
          <Text>{weather.results.sunrise}</Text>
        </View>
      </View>

      <View style={{ width: "50%" }}>
        <View style={styles.condition}>
          <MaterialCommunityIcons
            name="weather-sunset-down"
            size={27}
            color="#f0f0f0"
          />
          <Text>{weather.results.sunset}</Text>
        </View>

        <View style={styles.condition}>
          <Feather name="droplet" size={27} color="#f0f0f0" />
          <Text>{weather.results.humidity}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopWidth: 1,
    borderColor: "#FFF",
  },
  condition: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
});
