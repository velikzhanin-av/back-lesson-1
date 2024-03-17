import {db} from "../../db/db";
import {inputValidation} from "./inputValidation";

export const validation = (inputData:any) => {
    let errorsMessages = inputValidation(inputData)
    if (!errorsMessages) {
        let errorsMessages: any = {
            "errorsMessages": []
        }

    if (typeof inputData.canBeDownloaded !== 'boolean') {
        errorsMessages.errorsMessages.push({
            "message": "must boolean type",
            "field": "canBeDownloaded"
        })
        }
    }
    return errorsMessages
}

export const updateVideoById = (req: any, res: any) => {
    let video = db.videos.find(item => item.id == Number(req.params.id))
    if (video) {
        const errorsMessages = inputValidation(req.body)
        if (errorsMessages.errorsMessages.length === 0) {
            for (let qwerty in req.body) {
                console.log(qwerty)
                video[qwerty] = req.body[qwerty]
            }
            res
                .sendStatus(204)
        } else {
            res
                .status(400)
                .json(errorsMessages)
        }
    } else {
        res
            .sendStatus(404)
    }
}

