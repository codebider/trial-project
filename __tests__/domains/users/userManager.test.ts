const mockFunc = jest.fn();
const mockBuildFunc = jest.fn();
const mockFindOneFunc = jest.fn();
import { UserManager } from '@server/domains/users/userManager';

const mockResolveValue = {};
const mockFindOneValue = {
    id: 1,
    username: 'daniel'
};

jest.mock('@server/domains/users/entity/user', () => ({
    User: jest.fn().mockImplementation(() => ({
        build: mockBuildFunc.mockImplementation(() => ({
            save: mockFunc
        })),
        update: mockFunc,
        findAll: jest.fn().mockImplementation(() => mockResolveValue),
        findOne: mockFindOneFunc.mockImplementation(() => mockFindOneValue)
    }))
}));

describe('UserManager', () => {
    let userManager: UserManager;
    let connectorMock;
    beforeEach(() => {
        jest.clearAllMocks();
        connectorMock = jest.fn();
        userManager = new UserManager(connectorMock);
    });

    describe('create', () => {
        it('should call with correct params', async () => {
            const userData = {
                id: 2
            };

            mockFunc.mockImplementation(() => ({
                get: jest.fn().mockReturnValue(userData)
            }));

            const result = await userManager.create({
                fullName: 'daniel le',
                username: 'danielle',
                password: 'p@ssword'
            });
            expect(mockFunc).toBeCalledTimes(1);
            expect(mockFunc).toBeCalledWith();
            expect(mockBuildFunc).toBeCalledWith({ fullName: 'daniel le', password: 'p@ssword', username: 'danielle' });
            expect(result).toEqual(userData);
        });
    });

    describe('findOne', () => {
        it('should call with correct params', async () => {
            const result = await userManager.findOne({
                username: 'danielle'
            });

            expect(mockFindOneFunc).toBeCalledTimes(1);
            expect(mockFindOneFunc).toBeCalledWith({
                raw: true,
                where: { username: 'danielle' }
            });
            expect(result).toEqual(mockFindOneValue);
        });
    });
});
