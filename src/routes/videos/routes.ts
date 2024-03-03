import {SETTINGS} from "../../settings";
import {app} from "../../app";
import {getVideos} from "../../controllers/videos/getVideos";
import {createVideo} from "../../controllers/videos/createVideo";



export const deleteAll = (req: any, res: any) => {
    res
        .status(204)
        .json({result: 'All data is deleted'})
}


app.delete('/testing/all-data', deleteAll)
app.get(SETTINGS.PATH.VIDEOS, getVideos)
app.post(SETTINGS.PATH.VIDEOS, createVideo)