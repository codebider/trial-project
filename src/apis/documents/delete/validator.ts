import * as yup from 'yup';

const validatorParams = yup.object({
    id: yup.number().required()
});

export { validatorParams };
