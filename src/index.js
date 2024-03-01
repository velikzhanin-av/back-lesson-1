const express = require('express')
// import {config} from "dotenv";

const app = express()

// config()
const PORT =  3000

app.get('/', (req, res) => {
    res.send("Hello World")
})

app.listen(PORT, () => {
    console.log(`Example listening on port ${PORT}`)
})