import {db} from "../../db/db";

export const getVideos = (req: any, res: any) => {
    res
        .status(200)
        .json(db.videos)
}