import {db} from "../../app";

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