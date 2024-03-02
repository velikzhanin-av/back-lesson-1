import {SETTINGS} from "./settings";
import {app} from "./app";

app.listen(SETTINGS.PORT, () => {
    console.log(`Server started on port ${SETTINGS.PORT}`)
})
