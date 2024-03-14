import express from 'express'
import {SETTINGS} from "./settings";
import {createDB} from "./db";

export const app = express()
app.use(express.json())

export const db = createDB()

enum availableResolutions { P144, P240, P360, P480, P720, P1080, P1440, P2160}

export const inputValidation = (inputData:any) => {
    let errorsMessages: any = {
        "errorsMessages": []
    }
    if (typeof inputData.title === 'undefined') {
        let error: object = {
            "message": "required field",
            "field": "title"
        }
        errorsMessages.errorsMessages.push(error)
        return errorsMessages
    } else if (typeof inputData.title !== "string") {
        let error: object = {
            "message": "field must type 'string'",
            "field": "title"
        }
        errorsMessages.errorsMessages.push(error)
    } else if (inputData.title.length > 40) {
        let error: object = {
            "message": "required max length: 40",
            "field": "title"
        }
        errorsMessages.errorsMessages.push(error)
    }

    if (typeof inputData.author === 'undefined') {
        let error: object = {
            "message": "required field",
            "field": "author"
        }
        errorsMessages.errorsMessages.push(error)
        return errorsMessages
    } else if (typeof inputData.author !== "string") {
        let error: object = {
            "message": "field must type 'string'",
            "field": "author"
        }
        errorsMessages.errorsMessages.push(error)
    } else if (inputData.title.author > 20) {
        let error: object = {
            "message": "required max length: 40",
            "field": "author"
        }
        errorsMessages.errorsMessages.push(error)
    }

    return errorsMessages
}

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
                "createdAt": "2024-03-13T08:53:06.967Z",
                "publicationDate": "2024-03-14T08:53:06.967Z",
                "availableResolutions": [
                    "P144"
                ]
            }
        ])
}

export const createVideo = (req: any, res: any) => {
    const errorsMessages = inputValidation(req.body)

    if (errorsMessages.errorsMessages.length === 0) {
        const createdAt = new Date()
        const publicationDate = new Date()
        publicationDate.setDate(publicationDate.getDate() + 1)
// 1224214
        const newVideo = {
            "id": 0,
            "title": req.body.title,
            "author": req.body.author,
            "canBeDownloaded": false,
            "minAgeRestriction": null,
            "createdAt": createdAt.toISOString(),
            "publicationDate": publicationDate.toISOString(),
            "availableResolutions": req.body.availableResolutions
        }
        db.videos.push(newVideo)

        res
            .status(201)
            .json(newVideo)
    } else {
        res
            .status(400)
            .json(errorsMessages)
    }
}

export const getVideoById = (req: any, res: any) => {
    const resultVideo = db.videos.find(item => item.id == Number(req.params.id))
    if (resultVideo) {
        res
            .status(200)
            .json(resultVideo)
    } else {
        res
            .status(404)
    }

}

app.get('/', helloWorld)
app.delete('/testing/all-data', deleteAll)
app.get(SETTINGS.PATH.VIDEOS, getVideos)
app.post(SETTINGS.PATH.VIDEOS, createVideo)
app.get(SETTINGS.PATH.VIDEOS + '/:id' , getVideoById)
