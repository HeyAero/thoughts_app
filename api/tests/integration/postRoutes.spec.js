describe('posts endpoint', () => {
    let api;
    beforeEach(async () => {
        await resetTestDB();
    })

    beforeAll(async () => {
        api = app.listen(global.port, () => console.log(`Test server running on port ${global.port}`))
    })

    afterAll(async () => {
        console.log('gracefully stopping test server');
        await api.close();
    })

    it('should return a single post by a valid ID', async () => {
        const res = await global.request(api).get('/1');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('id');
    })

    it('should not return a post by an invalid ID', async () => {
        const res = await global.request(api).get('/4');
        expect(res.statusCode).toEqual(404);
    })

    it('should create a new post given valid data', async () => {
        const res = await global.request(api).post('/').send({title: 'postTest', date: 'testData', name: 'testName', body: 'testBody'});
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('id');
    })
})