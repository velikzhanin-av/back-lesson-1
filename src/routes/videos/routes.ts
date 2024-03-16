import {Router} from "express";
import {SETTINGS} from "../../settings";
import {createVideo, helloWorld} from "../../controllers/videos/createVideo";
import {deleteAll} from "../../controllers/videos/deleteAll";
import {getVideos} from "../../controllers/videos/getVideos";
import {getVideoById} from "../../controllers/videos/getVideoById";

export const videosRouter = Router()

videosRouter.get('/', helloWorld)
videosRouter.delete('/testing/all-data', deleteAll)
videosRouter.get(SETTINGS.PATH.VIDEOS, getVideos)
videosRouter.post(SETTINGS.PATH.VIDEOS, createVideo)
videosRouter.get(SETTINGS.PATH.VIDEOS + '/:id' , getVideoById)