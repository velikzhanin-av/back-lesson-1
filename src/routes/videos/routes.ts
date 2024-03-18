import {Router} from "express";
import {SETTINGS} from "../../settings";
import {createVideo} from "../../controllers/videos/createVideo";
import {deleteAll} from "../../controllers/videos/deleteAll";
import {getVideos} from "../../controllers/videos/getVideos";
import {getVideoById} from "../../controllers/videos/getVideoById";
import {helloWorld} from "../../controllers/videos/helloWorld";
import {updateVideoById} from "../../controllers/videos/updateVideoById";
import {deleteVideoById} from "../../controllers/videos/deleteVideoById";

export const videosRouter = Router()

videosRouter.get('/', helloWorld)
videosRouter.delete('/testing/all-data', deleteAll)
videosRouter.get(SETTINGS.PATH.VIDEOS, getVideos)
videosRouter.post(SETTINGS.PATH.VIDEOS, createVideo)
videosRouter.get(SETTINGS.PATH.VIDEOS + '/:id' , getVideoById)
videosRouter.put(SETTINGS.PATH.VIDEOS + '/:id' , updateVideoById)
videosRouter.delete(SETTINGS.PATH.VIDEOS + '/:id' , deleteVideoById)