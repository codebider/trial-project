import * as yup from 'yup';

const validatorBody = yup.object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    phoneNumber: yup.string(),
    address: yup.string(),
    ktpNumber: yup.string(),
    npwpNumber: yup.string(),
    passportNumber: yup.string()
});

const validatorParams = yup.object({
    id: yup.number().required()
});

export { validatorBody, validatorParams };
