import { Op } from 'sequelize';

const mockFunc = jest.fn();
const mockBuildFunc = jest.fn();
const mockFindOneFunc = jest.fn();
const countFunc = jest.fn();
const destroyFunc = jest.fn();
import { documentSample } from '@tests/fixtures/document.fixture';
import { DocumentManager } from '@server/domains/documents/documentManager';

const mockResolveValue = {};

jest.mock('@server/domains/documents/entity/document', () => ({
    Document: jest.fn().mockImplementation(() => ({
        build: mockBuildFunc.mockImplementation(() => ({
            save: mockFunc
        })),
        update: mockFunc,
        findAll: jest.fn().mockImplementation(() => mockResolveValue),
        findOne: mockFindOneFunc.mockImplementation(() => documentSample),
        count: countFunc.mockImplementation(() => 2),
        destroy: destroyFunc.mockImplementation(() => null)
    }))
}));

describe('DocumentManager', () => {
    let documentManager: DocumentManager;
    let connectorMock;
    beforeEach(() => {
        jest.clearAllMocks();
        connectorMock = jest.fn();
        documentManager = new DocumentManager(connectorMock);
    });

    describe('create', () => {
        it('should call with correct params', async () => {
            const userData = {
                id: 2
            };

            mockFunc.mockImplementation(() => ({
                get: jest.fn().mockReturnValue(userData)
            }));

            const result = await documentManager.create(documentSample);
            expect(mockFunc).toBeCalledTimes(1);
            expect(mockFunc).toBeCalledWith();
            expect(mockBuildFunc).toBeCalledWith({
                email: 'ledam@gmail.com',
                name: 'danielle',
                phoneNumber: '0967182723',
                userId: 2221
            });
            expect(result).toEqual(userData);
        });
    });

    describe('findOne', () => {
        it('should call with correct params', async () => {
            const result = await documentManager.findOne({
                userId: 221
            });

            expect(mockFindOneFunc).toBeCalledTimes(1);
            expect(mockFindOneFunc).toBeCalledWith({
                raw: true,
                where: { userId: 221 }
            });
            expect(result).toEqual(documentSample);
        });
    });

    describe('findOneByIdentityNumber', () => {
        it('should call with correct params', async () => {
            const result = await documentManager.findOneByIdentityNumber(221, '2211');

            expect(mockFindOneFunc).toBeCalledTimes(1);
            expect(mockFindOneFunc).toBeCalledWith({
                raw: true,
                where: {
                    userId: 221,
                    [Op.or]: {
                        ktpNumber: '2211',
                        npwpNumber: '2211'
                    }
                }
            });
            expect(result).toEqual(documentSample);
        });
    });

    describe('count', () => {
        it('should call with correct params', async () => {
            const result = await documentManager.count({ userId: 12 });

            expect(countFunc).toBeCalledTimes(1);
            expect(countFunc).toBeCalledWith({
                where: {
                    userId: 12
                }
            });
            expect(result).toEqual(2);
        });
    });

    describe('deleteById', () => {
        it('should call with correct params', async () => {
            await documentManager.deleteById(12, 222);

            expect(destroyFunc).toBeCalledTimes(1);
            expect(destroyFunc).toBeCalledWith({
                where: {
                    userId: 12,
                    id: 222
                }
            });
        });
    });
});
