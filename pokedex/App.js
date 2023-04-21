import { StatusBar } from "expo-status-bar";
import React, { useState, useCallback, useEffect } from "react";
import { StyleSheet, Text, View, FlatList, Image } from "react-native";

const pokePath = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";

export default function App() {
  const [firstGenPokemonDetails, setfirstGenPokemonDetails] = useState([]);

  useEffect(() => {
    const fetchFirstGenPokemons = async () => {
      const firstGenPokemonIdsResponse = await fetch(pokePath);
      const firstGenPokemonIdsBody = await firstGenPokemonIdsResponse.json();
  
      const firstGenPokemonDetails = await Promise.all(
        firstGenPokemonIdsBody.results.map(async (p) => {
          const pDetails = await fetch(p.url);
          const pDetailsBody = await pDetails.json();
  
          const abilities = pDetailsBody.abilities.map(a => a.ability.name);
  
          return {
            ...pDetailsBody,
            abilities
          };
        })
      );
  
      setfirstGenPokemonDetails(firstGenPokemonDetails);
    };
  
    fetchFirstGenPokemons();
  }, []);
  

  const renderPokemon = ({ item }) => {
    return (
      <View style={styles.pokemonContainer}>
        <Text style={styles.pokemonTitle}>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</Text>
        <Text style={styles.pokemonAbilities}>{item.abilities.join(", ")}</Text>
        <Image style={styles.pokemonSprite} source={{ uri: item.sprites.front_default, }}/>
      </View>
      
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pokedex</Text>
      <FlatList data={firstGenPokemonDetails} renderItem={renderPokemon} />
      <StatusBar style="auto" />
    </View>
  );
}

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