import {db} from "../../db/db";

export const deleteVideoById = (req: any, res: any) => {
    let video = db.videos.find(item => item.id == Number(req.params.id))
    if (!video) {
        res
            .sendStatus(404)
        return
    }

    db.videos = db.videos.filter(obj => obj.id !== Number(req.params.id))
    console.log(db.videos)
    res
        .sendStatus(204)
}