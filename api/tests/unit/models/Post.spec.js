const Post = require('../../../models/Post');

const pg = require('pg');
jest.mock('pg');

const db = require('../../../dbConfig/init');

describe('Post', () => {
    beforeEach(() => jest.clearAllMocks());

    afterAll(() => jest.resetAllMocks());

    describe('findById', () => {
        test('it resolves with a post on a successful db query', async () => {
            let postData = {id: 1, title: 'Test', data:'01/01', name: 'test', body: 'testing'};
            jest.spyOn(db, 'query').mockResolvedValueOnce({rows: [postData]});
            const post = await Post.findById(1);
            expect(post).toBeInstanceOf(Post);
        })
    })

    describe('create', () => {
        test('It resolves with a post on a successful db query', async () => {
            let postData = {title: 'Test', data:'01/01', name: 'test', body: 'testing'};
            jest.spyOn(db, 'query').mockResolvedValueOnce({rows: [{...postData, id: 1}]});
            const newPost = await Post.create(postData);
            expect(newPost).toHaveProperty('id');
        })
    })
})