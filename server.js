require('dotenv').config()
const express = require('express')
const app = express()
const {port} = process.env
const ctrl = require('./controller')
const pokeCtrl = require('./pokeCtrl')

//TOP LEVEL MIDDLEWARE
app.use(express.json())
app.use((req, res, next) => {
    console.log('top level middleware fired!')
    next()
})

//ENDPOINTS
app.get('/api/score', ctrl.get) //gets current score

app.post('/api/score/:team', ctrl.post) //adds one point

app.put('/api/score', ctrl.put) //updates score with body

app.delete('/api/score', ctrl.delete) //deletes team

//POKEMON ENDPOINTS
app.get('/api/pokemon', pokeCtrl.pokeHandler)

app.listen(port, () => console.log(`The server is live on Port: ${port}`))


