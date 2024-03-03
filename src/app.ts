import express from 'express'
import {SETTINGS} from "./settings";
import {createDB} from "./db";

export const app = express()

export const db = createDB()

export const helloWorld = (req: any, res: any) => {
    res
        .send("Hello World")
}

export const deleteAll = (req: any, res: any) => {
    res
        .status(204)
        .send("All data is deleted")
}

export const getVideos = (req: any, res: any) => {
    res
        .status(200)
        .json(db.videos)
}

app.get('/', helloWorld)
app.delete('/testing/all-data', deleteAll)
app.get(SETTINGS.PATH.VIDEOS, getVideos)
