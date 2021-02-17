import { UserService } from '@server/domains/users/userService';
import { userSample } from '@tests/fixtures/user.fixture';

describe('UserManager', () => {
    let userService: UserService;
    let connectorMock;
    beforeEach(() => {
        jest.clearAllMocks();
        connectorMock = {
            findOne: jest.fn(),
            create: jest.fn()
        };
        userService = new UserService(connectorMock);
    });

    describe('register', () => {
        it('should call with correct params', async () => {
            connectorMock.findOne.mockResolvedValue(null);
            connectorMock.create.mockResolvedValue(userSample);

            const result = await userService.register({
                fullName: 'daniel le',
                username: 'danielle',
                password: 'p@ssword'
            });
            expect(result).toEqual(userSample);
        });

        it('throw error if existed', async () => {
            connectorMock.findOne.mockResolvedValue(userSample);

            await expect(
                userService.register({
                    fullName: 'daniel le',
                    username: 'danielle',
                    password: 'p@ssword'
                })
            ).rejects.toThrowError('User existed');
        });
    });
});
