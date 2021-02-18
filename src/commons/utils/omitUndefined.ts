import omitBy from 'lodash/omitBy';

import isMissing from '@server/commons/conditional/isMissing';

const omitUndefined = (object: { [key: string]: unknown }): { [key: string]: unknown } => {
    if (!object) {
        return object;
    }
    return omitBy(object, isMissing);
};

export default omitUndefined;
