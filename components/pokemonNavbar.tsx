import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function PokemonNavbar() {
  return (
    <View style={styles.container}>
      {/* Red Header */}
      <View style={styles.redBar}>
        <Image
          source={{
            uri: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png",
          }}
          style={styles.pokeball}
        />

        <Text style={styles.title}>Pokédex</Text>

        <View style={{ width: 32 }} />
      </View>

      {/* Yellow Strip */}
      <View style={styles.yellowStrip} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#EF5350",
    elevation: 8,
    paddingTop: 40, // status bar
  },
  redBar: {
    backgroundColor: "#EF5350",
    paddingVertical: 14,
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  pokeball: {
    width: 32,
    height: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: "800",
    color: "white",
    textShadowColor: "rgba(0,0,0,0.25)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  yellowStrip: {
    height: 6,
    backgroundColor: "#FFCB05",
    width: "100%",
  },
});
