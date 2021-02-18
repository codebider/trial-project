import * as yup from 'yup';

const validator = yup.object({
    identityNumber: yup.string().required()
});

export default validator;
