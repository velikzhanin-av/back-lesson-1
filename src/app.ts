import express from 'express'
import {SETTINGS} from "./settings";

export const app = express()

export const helloWorld = (req: any, res: any) => {
    res
        .send("Hello World")
}

export const deleteAll = (req: any, res: any) => {
    res
        .status(204)
        .json({'description': 'All data is deleted'})
}

export const getVideos = (req: any, res: any) => {
    res
        .status(200)
        .json({'description': 'All data is deleted'})
}

app.get('/', helloWorld)
app.get('/testing/all-data', deleteAll)
app.get(SETTINGS.PATH.HOMETASK01 + SETTINGS.PATH.VIDEOS, getVideos)
