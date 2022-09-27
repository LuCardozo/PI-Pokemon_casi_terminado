import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {useState, useEffect} from "react";
import s from "./PokemonCreate.module.css"

import { getType, postPokemon } from "../../Redux/Actions/actions";

export default function PokemonCreate(){
    const dispatch = useDispatch()
    const types = useSelector((state) => state.Types)
    const [input, setInput] = useState({
        name: "",
        hp: 0,
        atk: 0,
        dfs: 0,
        vel: 0,
        alt: 0,
        peso: 0,
        img: "",
        tipo: []
    })
    useEffect(() =>{
        dispatch(getType())
    }, [dispatch])
    console.log(input)

    const handleChange = (e) =>{
        setInput({
            ...input,
            [e.target.name]:  e.target.value
        })
    }
    const handleSelect = (e) =>{
        console.log(e.target.value)
        setInput({
            ...input,
            tipo: [...input.tipo, e.target.value]
        })
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(postPokemon(input))
        alert("personaje creado");
    }


    return(
        <div >
            <div className={s.inicio}>
                <Link to="/home">
                    Inicio
                </Link>
            </div>
            <div className={s.form}>
                <h2>Crea tu Personaje</h2>
                <form onSubmit={(e) =>{handleSubmit(e)}}>
                    <label className={s.label}>Nombre:</label>
                    <input type="text" value={input.name} name="name" onChange={handleChange}/>

                    <label className={s.label}>Vida:</label>
                    <input type="number" value={input.hp} name="hp" onChange={handleChange} />

                    <label className={s.label}>Ataque:</label>
                    <input type="number" value={input.atk} name="atk" onChange={handleChange}/>

                    <label className={s.label}>Defensa:</label>
                    <input type="number" value={input.dfs} name="dfs" onChange={handleChange}/>

                    <label className={s.label}>Velocidad:</label>
                    <input type="number" value={input.vel} name="vel" onChange={handleChange}/>

                    <label className={s.label}>Altura:</label>
                    <input type="number" value={input.alt} name="alt" onChange={handleChange}/>

                    <label className={s.label}>Peso:</label>
                    <input type="number" value={input.peso} name="peso"onChange={handleChange}/>

                    <label className={s.label}>Imagen representativa</label>
                    <input type="text" value={input.img} name="img" onChange={handleChange}/>
                 <div className={s.select}>
                    <h2>Tipo 1</h2>
                    <select onChange={(e) =>{handleSelect(e)}}>
                    {
                        types.map((t) =>(
                            <option value={t.name} >{t.name}</option>
                        ))
                    }
                    </select>
                </div>  
                    <button type="submit" >Crear Pokemon</button>
                </form>
            </div>
        </div>
    )
}