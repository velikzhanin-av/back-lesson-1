export const getVideos = (req: any, res: any) => {
    res
        .status(200)
        .json([
            {
                "id": 0,
                "title": "string",
                "author": "string",
                "canBeDownloaded": false,
                "minAgeRestriction": null,
                "createdAt": "2024-03-13T08:53:06.967Z",
                "publicationDate": "2024-03-14T08:53:06.967Z",
                "availableResolutions": [
                    "P144"
                ]
            }
        ])
}