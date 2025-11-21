import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function PokemonNavbar({ title }: { title?: string }) {
  return (
    <View style={styles.container}>
      <View style={styles.redBar}>
        <View style={{ width: 20 }} />
        <Text style={styles.title}>{title}</Text>
        <Image
          source={{
            uri: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png",
          }}
          style={styles.pokeball}
        />
      </View>

      <View style={styles.yellowStrip} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: "#EF5350", paddingTop: 40 },
  redBar: {
    backgroundColor: "#EF5350",
    paddingVertical: 14,
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  backText: { color: "white", fontSize: 20, fontWeight: "bold" },
  title: { fontSize: 20, fontWeight: "800", color: "white" },
  pokeball: { width: 32, height: 32 },
  yellowStrip: { height: 6, backgroundColor: "#FFCB05" },
});
