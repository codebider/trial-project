import { DocumentService } from '@server/domains/documents/documentService';
import { documentSample } from '@tests/fixtures/document.fixture';

describe('DocumentService', () => {
    let documentService: DocumentService;
    let connectorMock;
    beforeEach(() => {
        jest.clearAllMocks();
        connectorMock = {
            findOne: jest.fn(),
            create: jest.fn(),
            checkExistedByIdentityNumber: jest.fn(),
            updateById: jest.fn()
        };
        documentService = new DocumentService(connectorMock);
    });

    describe('create', () => {
        it('should call with correct params', async () => {
            connectorMock.create.mockResolvedValue(documentSample);
            connectorMock.checkExistedByIdentityNumber.mockResolvedValue(false);

            const result = await documentService.create(documentSample);
            expect(result).toEqual(documentSample);
        });

        it('should throw error if exist identity number', async () => {
            connectorMock.create.mockResolvedValue(documentSample);
            connectorMock.checkExistedByIdentityNumber.mockResolvedValue(true);

            await expect(documentService.create(documentSample)).rejects.toThrowError('Document Duplicated');
        });
    });

    describe('update', () => {
        it('should call with correct params', async () => {
            connectorMock.updateById.mockResolvedValue(documentSample);
            connectorMock.findOne.mockResolvedValue(documentSample);
            connectorMock.checkExistedByIdentityNumber.mockResolvedValue(false);
            const { userId, ...doc } = documentSample;
            const result = await documentService.update(userId, 111, doc);
            expect(result).toEqual(documentSample);
            expect(connectorMock.updateById).toBeCalledTimes(1);
            expect(connectorMock.updateById).toBeCalledWith(userId, 111, doc);
        });

        it('should throw error if exist identity number', async () => {
            connectorMock.create.mockResolvedValue(documentSample);
            connectorMock.checkExistedByIdentityNumber.mockResolvedValue(true);

            await expect(documentService.create(documentSample)).rejects.toThrowError('Document Duplicated');
        });
    });
});
