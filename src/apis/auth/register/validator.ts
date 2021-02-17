import * as yup from 'yup';

const validator = yup.object({
    username: yup.string().required(),
    fullName: yup.string().required(),
    password: yup.string().required()
});

export default validator;
