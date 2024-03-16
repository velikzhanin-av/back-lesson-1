import {SETTINGS} from "./settings";
import {app} from "./app";
import {videosRouter} from "./routes/videos/routes";

app.listen(SETTINGS.PORT, () => {
    console.log(`Server started on port ${SETTINGS.PORT}`)
})
app.use(videosRouter)