import express from 'express'
import {SETTINGS} from "./settings";
import {createDB} from "./db";

export const app = express()
app.use(express.json())

export const db = createDB()

export const helloWorld = (req: any, res: any) => {
    res
        .send("Hello World")
}

export const deleteAll = (req: any, res: any) => {
    res
        .status(204)
        .json({title: 'All data is deleted'})
}

export const getVideos = (req: any, res: any) => {
    res
        .status(200)
        .json([
            {
                "id": 0,
                "title": "string",
                "author": "string",
                "canBeDownloaded": true,
                "minAgeRestriction": null,
                "createdAt": "2024-03-03T18:01:06.938Z",
                "publicationDate": "2024-03-03T18:01:06.938Z",
                "availableResolutions": [
                    "P144"
                ]
            }
        ])
}

export const createVideo = (req: any, res: any) => {
    const newVideo = {
        "id": 0,
        "title": req.body.title,
        "author": req.body.author,
        "canBeDownloaded": true,
        "minAgeRestriction": null,
        "createdAt": "2024-03-03T18:01:06.938Z",
        "publicationDate": "2024-03-03T18:01:06.938Z",
        "availableResolutions": req.body.availableResolutions
    }
    db.videos.push(newVideo)

    res
        .status(201)
        .json(newVideo)
}


app.get('/', helloWorld)
app.delete('/testing/all-data', deleteAll)
app.get(SETTINGS.PATH.VIDEOS, getVideos)
app.post(SETTINGS.PATH.VIDEOS, createVideo)