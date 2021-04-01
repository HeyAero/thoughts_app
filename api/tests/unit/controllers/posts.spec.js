const postsController = require('../../../controllers/posts');
const Post = require('../../../models/Post');

const mockSend = jest.fn();
const mockJson = jest.fn();
const mockStatus = jest.fn(code => ({send: mockSend, json: mockJson, end: jest.fn()}));
const mockRes = {status: mockStatus};

describe('posts controller', () => {
    beforeEach(() => jest.clearAllMocks());

    afterAll(() => jest.resetAllMocks());

    describe('goToPost', () => {
        test('it returns a post with a 200 status code', async () => {
            let testPost = {id: 1, title: 'Test', date: '01/01/2000', name: 'test', body: 'testing'};
            jest.spyOn(Post, 'findById').mockResolvedValue(new Post(testPost));
            const mockReq = {params: {id:1}};
            await postsController.goToPost(mockReq, mockRes);
            expect(mockStatus).toHaveBeenCalledWith(200);
            expect(mockJson).toHaveBeenCalledWith(new Post(testPost));
        })
    })

    describe('newPost', () => {
        test('it returns a new post with a 201 status code', async () => {
            let testPost = {id: 1, title: 'Test', date: '01/01/2000', name: 'test', body: 'testing'};
            jest.spyOn(Post, 'create').mockResolvedValue(new Post(testPost));
            const mockReq = {body: testPost};
            await postsController.newPost(mockReq, mockRes);
            expect(mockStatus).toHaveBeenCalledWith(201);
            expect(mockJson).toHaveBeenCalledWith(new Post(testPost));
        })
    })
})