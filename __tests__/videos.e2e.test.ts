import {req} from "./test-helpers";
import {db} from "../src/app";


describe('/hometask_01/api/testing/all-data', () => {
    it('return code status 204', async () => {
        const res = await req
            .get('/testing/all-data')
            .expect(204)
    })
});

describe('/videos', () => {
    it('return all videos and code status 200', async () => {
        db.videos = [{title: 'title any video'}]

        const res = await req
            .get('/videos')
            .expect(200)

        expect(res.body.length).toBe(1)
    })
});

