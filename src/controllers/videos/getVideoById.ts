import {db} from "../../db/db";

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
