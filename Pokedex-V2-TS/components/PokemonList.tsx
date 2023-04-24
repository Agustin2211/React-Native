import React, {useEffect, useState} from "react";
import {View, Text} from "react-native";
import { PokemonClient } from "pokenode-ts";

const PokemonList = () =>{
    useEffect(()=> {
        const fetchPokemon = async () => {
            const api = new PokemonClient();
            await api
            .getPokemonById(4)
            .then(pokemon => {
                
            })
            .catch(err =>{
                console.log(err);
            });
        };
        fetchPokemon();
    });
    
    return(
        <View>
            <Text>Pokedex</Text>
        </View>
    );
};

export default PokemonList;