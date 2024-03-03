import {req} from "./test-helpers";


describe('/hometask_01/api/testing/all-data', () => {
    it('return code status 204', async () => {
        const res = await req
            .get('/hometask_01/api/testing/all-data')
            .expect(204)
    })
});
