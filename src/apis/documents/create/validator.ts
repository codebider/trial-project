import * as yup from 'yup';

const validator = yup.object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    phoneNumber: yup.string().nullable(),
    address: yup.string().nullable(),
    ktpNumber: yup.string().nullable(),
    npwpNumber: yup.string().nullable(),
    passportNumber: yup.string().nullable()
});

export default validator;
