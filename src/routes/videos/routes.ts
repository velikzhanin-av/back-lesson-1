import {SETTINGS} from "../../settings";
import {app} from "../../app";
import {getVideos} from "../../controllers/videos/getVideos";
import {createVideo} from "../../controllers/videos/createVideo";
import {deleteAll} from "../../controllers/videos/deleteAll";


app.get('/', (req: any, res: any) => {res.send('hello world')})
app.delete('/testing/all-data', deleteAll)
app.get(SETTINGS.PATH.VIDEOS, getVideos)
app.post(SETTINGS.PATH.VIDEOS, createVideo)