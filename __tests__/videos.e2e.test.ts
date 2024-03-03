import {req} from "./test-helpers";
import {db} from "../src/app";


describe('GET /testing/all-data', () => {
    it('return code status 204', async () => {
        const res = await req
            .delete('/testing/all-data')
            .expect(204)
    })
});

describe('GET /videos', () => {
    it('return all videos and code status 200', async () => {
        db.videos = [{title: 'title any video'}]

        const res = await req
            .get('/videos')
            .expect(200)

        expect(res.body.length).toBe(1)
    })
});

describe('POST /videos', () => {
    it('return added video json and code status 201', async () => {
        const body = {
            "title": "string",
            "author": "string",
            "availableResolutions": [
                "P144"
            ]
        }
        const newVideo = {
            "id": 0,
            "title": body.title,
            "author": body.author,
            "canBeDownloaded": true,
            "minAgeRestriction": null,
            "createdAt": "2024-03-03T18:01:06.938Z",
            "publicationDate": "2024-03-03T18:01:06.938Z",
            "availableResolutions": body.availableResolutions
        }
        db.videos.push(newVideo)

        const res = await req
            .post('/videos')
            .send(body)

        expect(res.status).toBe(201)
        expect(res.body).toStrictEqual(newVideo)
    })
});

