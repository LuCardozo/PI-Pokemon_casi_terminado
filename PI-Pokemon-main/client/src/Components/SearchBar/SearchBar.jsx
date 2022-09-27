import React from "react";
import {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link} from "react-router-dom"

import { searchByName } from "../../Redux/Actions/actions";


export default function SearchBar(){
    const dispatch = useDispatch();
    const [name, setName] = useState("")

    const handleInputChange = (e) =>{
        e.preventDefault();
        setName(e.target.value)
    }

    const inputSubmit = (e) =>{
        e.preventDefault()
        dispatch(searchByName(name))
    }

    return(
        <div>
            <input type="text" placeholder="Nombre del bicho" onChange={e => handleInputChange(e)} />
            <button type="submit" onClick={e => inputSubmit(e)} >Buscar</button>
        </div>
    )
}