interface AppErrorResponse {
    errorId: string;
    message: string;
}

export class AppError extends Error {
    public errorId: string;
    public statusCode?: number;
    public userMessage?: string;
    public internalMessage: string;

    constructor({
        statusCode,
        errorId,
        userMessage,
        internalMessage
    }: {
        statusCode?: number;
        errorId: string;
        userMessage?: string; // public message
        internalMessage: string; // Internal message
    }) {
        super(internalMessage);

        this.errorId = errorId;
        this.statusCode = statusCode || 500;
        this.userMessage = userMessage;
        this.internalMessage = internalMessage;
    }

    public getStatusCode(): number {
        return this.statusCode || 500;
    }

    public toResponse(): AppErrorResponse {
        return {
            errorId: this.errorId,
            message: this.userMessage as string
        };
    }
}
