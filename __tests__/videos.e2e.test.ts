import {req} from "./test-helpers";
import {db} from "../src/app";
import {SETTINGS} from "../src/settings";


describe(  'DELETE /testing/all-data', () => {
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
            .get(SETTINGS.PATH.VIDEOS)
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
        const createdAt = new Date()
        const publicationDate = new Date()
        publicationDate.setDate(publicationDate.getDate() + 1)
        const newVideo = {
            "id": 0,
            "title": body.title,
            "author": body.author,
            "canBeDownloaded": false,
            "minAgeRestriction": null,
            "createdAt": createdAt.toISOString(),
            "publicationDate": publicationDate.toISOString(),
            "availableResolutions": body.availableResolutions
        }
        db.videos.push(newVideo)

        const res = await req
            .post(SETTINGS.PATH.VIDEOS)
            .send(body)

        expect(res.status).toBe(201)
        expect({title:res.body.title, author:res.body.author, availableResolutions: res.body.availableResolutions})
            .toMatchObject({title: body.title, author:body.author, availableResolutions:body.availableResolutions})
    })
});

describe('GET /videos/{id}', () => {
    it('return video by id and code status 200', async () => {
        const newVideo = {
            "id": 2,
            "title": "title test",
            "author": "author test",
            "canBeDownloaded": false,
            "minAgeRestriction": null,
            "createdAt": new Date().toISOString(),
            "publicationDate": new Date().toISOString(),
            "availableResolutions": [
                "P144",
                "P480",
            ]
        }
        db.videos.push(newVideo)

        const res = await req
            .get(`${SETTINGS.PATH.VIDEOS}/2`)
            .expect(200)

        expect(res.body.length).toBe(1)
    })
});
