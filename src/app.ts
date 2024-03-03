import express from 'express'

export const app = express()

app.get('/', (req: any, res: any) => {
    res.send("Hello World")
})

app.get('/hometask_01/api/testing/all-data', (req: any, res: any) => {
    res.status(204).json({'description': 'All data is deleted'})
})
