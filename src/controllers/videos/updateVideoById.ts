import {db} from "../../db/db";
import {inputValidation} from "./inputValidation";

export const validation = (inputData: any) => {
    let errorsMessages = inputValidation(inputData)
    if (!errorsMessages) {
        let errorsMessages: any = {
            "errorsMessages": []
        }
    }

    if (typeof inputData.canBeDownloaded !== 'boolean') {
        errorsMessages.errorsMessages.push({
            "message": "must boolean type",
            "field": "canBeDownloaded"
        })
    }
    return errorsMessages
}

export const updateVideoById = (req: any, res: any) => {
    let video = db.videos.find(item => item.id == Number(req.params.id))
    if (!video) {
        res
            .sendStatus(404)
        return
    }

    const errorsMessages = validation(req.body)
    if (errorsMessages.errorsMessages.length) {
        res
            .status(400)
            .json(errorsMessages)
        return
    }

    for (let key in req.body) {
        video[key] = req.body[key]
    }
    res
        .sendStatus(204)
}

