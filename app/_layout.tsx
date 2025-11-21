import PokemonNavbar from "@/components/pokemonNavbar";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        header: ({ options }) => (
          <PokemonNavbar title={options.title?.toString() || "Pokédex"} />
        ),
      }}
    >
      <Stack.Screen name="index" options={{ title: "Pokédex" }} />
      <Stack.Screen
        name="details/[name]"
        options={({ route }: any) => {
          const pokemonName = route.params.name;
          const formatted =
            pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1);

          return { title: `${formatted}` };
        }}
      />
    </Stack>
  );
}
