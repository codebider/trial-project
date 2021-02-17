import { UserService } from '@server/domains/users/userService';
import { userLogin, userSample } from '@tests/fixtures/user.fixture';

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

    describe('login', () => {
        it('should call with correct params', async () => {
            connectorMock.findOne.mockResolvedValue(userLogin);

            const result = await userService.login(userLogin.username, userLogin.plainPassword);
            expect(result.fullName).toEqual(userLogin.fullName);
            expect(result.token).toBeDefined();
        });

        it('throw error if not existed', async () => {
            connectorMock.findOne.mockResolvedValue(null);

            await expect(userService.login(userLogin.username, userLogin.plainPassword)).rejects.toThrowError(
                'NOT_FOUND'
            );
        });

        it('throw error if wrong password', async () => {
            connectorMock.findOne.mockResolvedValue(userLogin);

            await expect(userService.login(userLogin.username, userLogin.wrongPassword)).rejects.toThrowError(
                'WRONG_PASSWORD'
            );
        });
    });
});
