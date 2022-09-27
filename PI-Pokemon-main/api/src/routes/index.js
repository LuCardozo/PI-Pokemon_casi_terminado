const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
//me traigo la funcion q trae a los pokemones
const {getTodos} = require("../MiddleWare/GetAllPokemons")
const {getAllTypes} = require("../MiddleWare/GetAllTypes")
const {getById} = require("../MiddleWare/GetpokemonById")
const {createpokemon} = require("../MiddleWare/CreatePokemon")
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get("/pokemons", async (req, res) =>{
    let allpokemons = await getTodos()
    let {name} = req.query;
    if(name) {
        let finded = []
       finded.push(allpokemons.find(pokemon => pokemon.name.toLowerCase() === name.toLowerCase())) // buscamos al pokemon por su name 
       if(!finded) res.status(404).send(["No existe un pokemon con ese nombre"]) // por si ponen cualquier cosa
       res.send(finded)
    }
    else{
        res.send(allpokemons);
    }
})

router.get("/types", async (req, res) =>{
    let types = await getAllTypes()
    res.send(types)
})

router.get("/pokemons/:id", async (req, res) =>{
    let {id} = req.params
    let pokemon = await getById(id)
    res.send(pokemon)
})
router.post("/pokemons", async (req, res) =>{
    let {name, hp, atk, dfs, vel, alt, peso, tipo, img} = req.body
    let poke = await createpokemon(name, hp, atk, dfs, vel, alt, peso, tipo, img);
    res.send(poke)
})
module.exports = router;
