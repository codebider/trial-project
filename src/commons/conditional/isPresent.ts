import isMissing from './isMissing';

const isPresent = (value: unknown): boolean => !isMissing(value);

export default isPresent;
