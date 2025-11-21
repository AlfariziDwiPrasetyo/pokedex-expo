import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

export default function Details() {
  const { name } = useLocalSearchParams();
  return (
    <View style={{ flex: 1 }}>
      <Text>Pokemon {name}</Text>
    </View>
  );
}
