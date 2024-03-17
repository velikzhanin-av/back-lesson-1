import {db} from "../../db/db";
import {inputValidation} from "./inputValidation";

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
                .status(204)
        } else {
            res
                .status(400)
                .json(errorsMessages)
        }
    } else {
        res
            .status(404)
    }
}

