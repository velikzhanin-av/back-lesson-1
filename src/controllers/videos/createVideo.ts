import {db, inputValidation} from "../../app";

export const createVideo = (req: any, res: any) => {
    const errorsMessages = inputValidation(req.body)

    if (errorsMessages.errorsMessages.length === 0) {
        const createdAt = new Date()
        const publicationDate = new Date()
        publicationDate.setDate(publicationDate.getDate() + 1)

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

export const helloWorld = (req: any, res: any) => {
    res
        .send("Hello World")
}