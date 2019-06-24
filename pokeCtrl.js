const axios = require('axios')

let pokeData = null
axios.get('https://pokeapi.co/api/v2/pokemon/ditto/').then(res => {
    pokeData = res.data
})

module.exports = {
    pokeHandler(req, res, next) {
        res.status(200).send(pokeData)
    }
}