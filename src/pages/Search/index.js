import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Keyboard,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import Conditions from "../../components/Conditions";

import api, { key } from "../../services/api";

export default function Search() {
  const navigation = useNavigation();

  const [input, setInput] = useState("");
  const [city, setCity] = useState(null);
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

  if (city) {
    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.navigate("Home")}
        >
          <Feather name="chevron-left" size={32} color="#000" />
          <Text style={{ fontSize: 22 }}>Voltar</Text>
        </TouchableOpacity>

        <View style={styles.searchBox}>
          <TextInput
            value={input}
            onChangeText={setInput}
            placeholder="Ex: Fortaleza, CE"
            style={styles.input}
          />
          <TouchableOpacity style={styles.icon} onPress={handleSearch}>
            <Feather name="search" size={22} color="#FFF" />
          </TouchableOpacity>
        </View>

        <LinearGradient style={styles.header} colors={["#1ed6ff", "#97c1ff"]}>
          <Text style={styles.date}>{city.results.date}</Text>
          <Text style={styles.city}>{city.results.city_name}</Text>
          <View>
            <Text style={styles.temp}>{city.results.temp}°</Text>
          </View>

          <Conditions weather={city} />
        </LinearGradient>
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.navigate("Home")}
      >
        <Feather name="chevron-left" size={32} color="#000" />
        <Text style={{ fontSize: 22 }}>Voltar</Text>
      </TouchableOpacity>

      <View style={styles.searchBox}>
        <TextInput
          value={input}
          onChangeText={setInput}
          placeholder="Ex: Fortaleza, CE"
          style={styles.input}
        />
        <TouchableOpacity style={styles.icon} onPress={handleSearch}>
          <Feather name="search" size={22} color="#FFF" />
        </TouchableOpacity>
      </View>

      {error && <Text style={{ marginTop: 25, fontSize: 18 }}>{error}</Text>}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: "10%",
    backgroundColor: "#e8f0ff",
  },
  backButton: {
    flexDirection: "row",
    marginLeft: 15,
    alignSelf: "flex-start",
    alignItems: "center",
    marginBottom: 10,
  },
  searchBox: {
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#ddd",
    width: "90%",
    height: 60,
    borderRadius: 10,
  },
  input: {
    width: "85%",
    height: 60,
    backgroundColor: "#FFF",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    padding: 7,
  },
  icon: {
    width: "15%",
    backgroundColor: "#1ed6ff",
    alignItems: "center",
    justifyContent: "center",
    height: 60,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  header: {
    marginTop: "5%",
    width: "90%",
    paddingTop: "5%",
    paddingBottom: "5%",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 10,
  },
  date: {
    color: "#fff",
    fontSize: 16,
  },
  city: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  temp: {
    color: "#fff",
    fontSize: 90,
    fontWeight: "bold",
  },
});
