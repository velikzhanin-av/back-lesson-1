import express from 'express'
import {SETTINGS} from "./settings";
import {createDB} from "./db";
import {videosRouter} from "./routes/videos/route";

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
    } else if (inputData.author.length > 20) {
        let error: object = {
            "message": "required max length: 20",
            "field": "author"
        }
        errorsMessages.errorsMessages.push(error)
    }
    return errorsMessages
}