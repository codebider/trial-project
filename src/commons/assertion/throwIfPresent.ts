import isPresent from '@server/commons/conditional/isPresent';

const throwIfPresent = (value: unknown, error: Error): void => {
    if (isPresent(value)) {
        throw error;
    }
};

export default throwIfPresent;
