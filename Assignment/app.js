const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/AlienDBex'

const app = express()

mongoose.connect(url, {useNewURLParser:true})
const con = mongoose.connection

con.on('open',()=>{
    console.log('connected...')
})

app.use(express.json())

const alienRouter = require('./routes/harrypotters')
app.use('/aliens',alienRouter)
app.listen(9000, ()=>{
    console.log('Server started')
})