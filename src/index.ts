const express = require('express')
import {config} from "dotenv";

const app = express()

config()
const PORT = process.env.port || 3000

app.get('/', (req: any, res: any) => {
    res.send("Hello World")
})

app.listen(PORT, () => {
    console.log(`Example listening on port ${PORT}`)
})