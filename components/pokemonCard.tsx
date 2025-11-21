import React, { useRef } from "react";
import { Animated, Image, Pressable, Text, View } from "react-native";

const PokemonCard = ({ pokemon, bgColor }: any) => {
  // Animated scale (aman sekarang)
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const onPressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 1.06,
      useNativeDriver: true,
    }).start();
  };

  const onPressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      friction: 5,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Animated.View
      style={{
        width: "48%",
        marginBottom: 16,
        transform: [{ scale: scaleAnim }],
      }}
    >
      <Pressable
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        style={{
          backgroundColor: bgColor,
          padding: 16,
          borderRadius: 20,
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Badge Type */}
        <View
          style={{
            position: "absolute",
            top: 10,
            left: 10,
            backgroundColor: "rgba(255,255,255,0.25)",
            paddingHorizontal: 8,
            paddingVertical: 4,
            borderRadius: 8,
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontWeight: "bold",
              fontSize: 12,
              textTransform: "capitalize",
            }}
          >
            {pokemon.types[0].type.name}
          </Text>
        </View>

        {/* Pokémon Image */}
        <Image
          source={{ uri: pokemon.image }}
          style={{
            width: 110,
            height: 110,
            resizeMode: "contain",
            marginBottom: 10,
          }}
        />

        {/* Pokémon Name */}
        <Text
          style={{
            fontSize: 16,
            fontWeight: "bold",
            textTransform: "capitalize",
            color: "#fff",
          }}
        >
          {pokemon.name}
        </Text>
      </Pressable>
    </Animated.View>
  );
};

export default PokemonCard;
