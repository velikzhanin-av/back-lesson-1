export const getVideos = (req: any, res: any) => {
    res
        .status(200)
        .json([
            {
                "id": 0,
                "title": "string",
                "author": "string",
                "canBeDownloaded": true,
                "minAgeRestriction": null,
                "createdAt": "2024-03-03T18:01:06.938Z",
                "publicationDate": "2024-03-03T18:01:06.938Z",
                "availableResolutions": [
                    "P144"
                ]
            }
        ])
}