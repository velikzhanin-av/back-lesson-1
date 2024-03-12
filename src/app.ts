import express from 'express'
import {SETTINGS} from "./settings";
import {createDB} from "./db";
import any = jasmine.any;

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
                "canBeDownloaded": false,
                "minAgeRestriction": null,
                "createdAt": new Date().toISOString(),
                "publicationDate": new Date().toISOString(),
                "availableResolutions": [
                    "P144"
                ]
            }
        ])
}

export const createVideo = (req: any, res: any) => {
    let errorsMessages: any = {
        "errorsMessages": []
    }

    if (typeof req.body.title !== "string") {
        let error:object = {
            "message": "field must type 'string'",
            "field": "title"
        }
        errorsMessages.errorsMessages.push(error)
        res
            .status(400)
            .json(errorsMessages)
    } else {
        const newVideo = {
            "id": 0,
            "title": req.body.title,
            "author": req.body.author,
            "canBeDownloaded": false,
            "minAgeRestriction": null,
            "createdAt": new Date().toISOString(),
            "publicationDate": new Date().toISOString(),
            "availableResolutions": req.body.availableResolutions
        }
        db.videos.push(newVideo)

        res
            .status(201)
            .json(newVideo)
    }


}

export const getVideoById = (req: any, res: any) => {
    const newVideo = {
        "id": 88,
        "title": "string",
        "author": "string",
        "canBeDownloaded": true,
        "minAgeRestriction": null,
        "createdAt": new Date().toISOString(),
        "publicationDate": new Date().toISOString(),
        "availableResolutions": [
            "P144"
        ]
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
// app.get(SETTINGS.PATH.VIDEOS + , createVideo)