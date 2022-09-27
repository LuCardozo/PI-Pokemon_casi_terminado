import React from "react";
import {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link, useParams} from "react-router-dom"

import { getPokemonDetail } from "../../Redux/Actions/actions";

import s from "./pokemonstyle.module.css"

export default function PokemonDetail(props){
    const dispatch = useDispatch();
    let {id} = useParams()
    console.log(id)
    useEffect(() =>{
        dispatch(getPokemonDetail(id))
    },[dispatch])

    const pokemon = useSelector((state) => state.pokemonDetail);
    
    return(
        <div>
            <Link to="/home">
                <h1>Volver</h1>
            </Link>
        <div className={s.plantilla}>
            <div>
                <img src={pokemon.img} className={s.img} />
            </div>
            <div className={s.dato}>
                <h2>Nombre: {pokemon.name}</h2>
                <h3>ID: {pokemon.id}</h3>
                <h4>Estadisticas: </h4>
                <p>
                    vida: {pokemon.hp}<br/>
                    Puntos de ataque: {pokemon.atk} <br/>
                    Defensa: {pokemon.dfs} <br />
                    Velocidad: {pokemon.vel} <br/>
                    Altura: {pokemon.alt} <br/>
                    Peso: {pokemon.peso} <br/>

                </p>
            </div>
        </div>
        </div>
    )
}