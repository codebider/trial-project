import * as yup from 'yup';

const validator = yup.object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    phoneNumber: yup.string(),
    address: yup.string(),
    ktpNumber: yup.string(),
    npwpNumber: yup.string(),
    passportNumber: yup.string()
});

export default validator;
