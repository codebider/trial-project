import { DocumentService } from '@server/domains/documents/documentService';
import { documentSample } from '@tests/fixtures/document.fixture';

describe('DocumentService', () => {
    let documentService: DocumentService;
    let connectorMock;
    beforeEach(() => {
        jest.clearAllMocks();
        connectorMock = {
            findOne: jest.fn(),
            create: jest.fn()
        };
        documentService = new DocumentService(connectorMock);
    });

    describe('create', () => {
        it('should call with correct params', async () => {
            connectorMock.create.mockResolvedValue(documentSample);

            const result = await documentService.create(documentSample);
            expect(result).toEqual(documentSample);
        });
    });
});
