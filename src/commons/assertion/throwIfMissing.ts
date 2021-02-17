import isMissing from '@server/commons/conditional/isMissing';

const throwIfMissing = (value: unknown, error: Error): void => {
    if (isMissing(value)) {
        throw error;
    }
};

export default throwIfMissing;
