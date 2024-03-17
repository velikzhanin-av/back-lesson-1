enum availableResolutions { P144, P240, P360, P480, P720, P1080, P1440, P2160}

export const inputValidation = (inputData:any) => {
    let errorsMessages: any = {
        "errorsMessages": []
    }
    const title = inputData.title
    const author = inputData.author

    if (typeof title === 'undefined') {
        let error: object = {
            "message": "required field",
            "field": "title"
        }
        errorsMessages.errorsMessages.push(error)
        return errorsMessages
    } else if (typeof title !== "string") {
        let error: object = {
            "message": "field must type 'string'",
            "field": "title"
        }
        errorsMessages.errorsMessages.push(error)
    } else if (title.length > 40) {
        let error: object = {
            "message": "required max length: 40",
            "field": "title"
        }
        errorsMessages.errorsMessages.push(error)
    }

    if (typeof author === 'undefined') {
        let error: object = {
            "message": "required field",
            "field": "author"
        }
        errorsMessages.errorsMessages.push(error)
        return errorsMessages
    } else if (typeof author !== "string") {
        let error: object = {
            "message": "field must type 'string'",
            "field": "author"
        }
        errorsMessages.errorsMessages.push(error)
    } else if (author.length > 20) {
        let error: object = {
            "message": "required max length: 20",
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
    return errorsMessages
}