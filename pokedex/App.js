import { StatusBar } from "expo-status-bar";
import React, { useState, useCallback, useEffect } from "react";
import { StyleSheet, Text, View, FlatList, Image } from "react-native";

const pokePath = "https://pokeapi.co/api/v2/pokemon?limit=10000offset=0";

export default function App() {
  const [pokemonDetails, setPokemonDetails] = useState([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonIdsResponse = await fetch(pokePath);
      const pokemonIdsBody = await pokemonIdsResponse.json();
  
      const pokemonDetails = await Promise.all(
        pokemonIdsBody.results.map(async (p) => {
          const pDetails = await fetch(p.url);
          const pDetailsBody = await pDetails.json();
          return {
            ...pDetailsBody,
          };
        })
      );
  
      setPokemonDetails(pokemonDetails);
    };
  
    fetchPokemons();
  }, []);
  

  const renderPokemon = ({ item }) => {
    const type = item.types[0].type.name;
    const backgroundColor = typeColors[type];
    return (
      <View style={[styles.pokemonContainer, { backgroundColor }]}>
      <Text style={styles.pokemonTitle}>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</Text>
      <Image style={styles.pokemonSprite} source={{ uri: item.sprites.front_default, }}/>
    </View> 
      
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pokedex</Text>
      <FlatList data={pokemonDetails} renderItem={renderPokemon} />
      <StatusBar style="auto" />
    </View>
  );
}

const typeColors = {
  normal: "gray",
  fire: "orange",
  water: "blue",
  electric: "yellow",
  grass: "green",
  ice: "lightblue",
  fighting: "red",
  poison: "purple",
  ground: "brown",
  flying: "skyblue",
  psychic: "pink",
  bug: "olive",
  rock: "tan",
  ghost: "indigo",
  dragon: "darkblue",
  dark: "darkgray",
  steel: "silver",
  fairy: "magenta",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 60,
  },
  title: {
    fontSize: 38,
    alignSelf: "center",
    marginBottom: 20,
  },
  pokemonContainer: { backgroundColor: "lightgrey", marginTop: 10 },
  pokemonTitle: {
    fontSize: 32,
    alignSelf: "center",
    marginTop: 10,
  },
  pokemonAbilities: {
    fontSize: 20,
    alignSelf: "center",
    marginTop: 10,
  },
  pokemonSprite: {
    width: 200,
    height: 200,
    alignSelf: "center",
  },
});