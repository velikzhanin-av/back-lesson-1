import express from 'express'

export const app = express()

app.get('/', (req: any, res: any) => {
    res.send("Hello World")
})

app.use('/hometask_01/api/testing/all-data', (req: any, res: any) => {
    res.json({"delete all": "deg"})
})

app.get('/about', (req, res) => {
    res.send('about')
})