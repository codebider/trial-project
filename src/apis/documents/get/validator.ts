import * as yup from 'yup';

const validator = yup.object({
    id: yup.string().required()
});

export default validator;
