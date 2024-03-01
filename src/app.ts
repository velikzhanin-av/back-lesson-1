import express from 'express'

export const app = express()

app.get('/', (req: any, res: any) => {
    res.send("Hello World")
})