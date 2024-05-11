require("dotenv").config()

//mongoDB connection
require('./database/mongoose')()

// express
const express = require('express')

const app = express()

const cors = require('cors') 
//app.use(cors())

// Compression middleware
const compression = require('compression')
app.use(compression())


// App routes
const router = require('./routes/router')

// Set app port
app.set("port",process.env.PORT)

// Json mmiddleware
app.use(express.json())

app.get("/", (req, res) => {
    res.send("Welcome to the API")
})

// Set the routes
app.use("/", router)

module.exports = app
