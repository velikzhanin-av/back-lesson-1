enum availableResolutions { P144, P240, P360, P480, P720, P1080, P1440, P2160}

export const inputValidation = (inputData:any) => {
    let errorsMessages: any = {
        "errorsMessages": []
    }
    const title = inputData.title
    const author = inputData.author

    if (typeof title === 'undefined' || typeof title !== "string" || title.length > 40) {
        let error: object = {
            "message": "error",
            "field": "title"
        }
        errorsMessages.errorsMessages.push(error)
    }

    if (typeof author === 'undefined' || typeof author !== "string" || author.length > 20) {
        let error: object = {
            "message": "required field",
            "field": "author"
        }
        errorsMessages.errorsMessages.push(error)
    }

    if (inputData.availableResolutions instanceof Array) {
        for (let res of inputData.availableResolutions) {
            if (!Object.values(availableResolutions).includes(res)) {
                let error: object = {
                    "message": "resolution not available",
                    "field": "availableResolutions"
                }
                errorsMessages.errorsMessages.push(error)
            }
        }
    }
    if (inputData.minAgeRestriction) {
        if (typeof inputData.minAgeRestriction !== 'number' || inputData.minAgeRestriction < 1 || inputData.minAgeRestriction > 18) {
            errorsMessages.errorsMessages.push({
                "message": "error",
                "field": "minAgeRestriction"
            })
        }
    }
    if (inputData.publicationDate) {
        if (typeof inputData.publicationDate !== 'string') {
            errorsMessages.errorsMessages.push({
                "message": "error",
                "field": "publicationDate"
            })
        }
    }

    return errorsMessages
}