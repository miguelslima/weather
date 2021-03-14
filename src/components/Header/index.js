import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { Ionicons } from "@expo/vector-icons";
import Conditions from "../Conditions";

export default function Header({ background, weather, icon }) {
  return (
    <>
      <Text style={styles.city}> {weather.results.city}</Text>
      <LinearGradient style={styles.header} colors={background}>
        <Ionicons name={icon.name} color={icon.color} size={120} />
        <Text style={styles.description}>{weather.results.description}</Text>
        <Text style={styles.date}> {weather.results.date}</Text>
        <Text style={styles.temp}>{weather.results.temp}°</Text>

        <Conditions background={background} weather={weather} />
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "90%",
    height: "59%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  description: {
    color: "#fff",
    fontSize: 24,
  },
  date: {
    color: "#fff",
    fontSize: 17,
  },
  city: {
    color: "#0f0f0f",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 20,
  },
  temp: {
    color: "#fff",
    fontSize: 80,
    fontWeight: "bold",
  },
});
