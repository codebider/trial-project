import omitBy from 'lodash/omitBy';
import isUndefined from 'lodash/isUndefined';

const omitUndefined = (object: { [key: string]: unknown }): { [key: string]: unknown } => {
    if (!object) {
        return object;
    }
    return omitBy(object, isUndefined);
};

export default omitUndefined;
