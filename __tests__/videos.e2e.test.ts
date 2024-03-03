import {req} from "./test-helpers";


describe('/hometask_01/api/testing/all-data', () => {
    it('return code status 204', async () => {
        const res = await req
            .get('/hometask_01/api/testing/all-data')
            .expect(204)
    })
});

describe('/videos', () => {
    it('return all videos and code status 200', async () => {
        const res = await req
            .get('/hometask_01/api/videos')
            .expect(200)
    })
});

