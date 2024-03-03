import * as Yup from 'yup';

export const SignupValidationSchema = Yup.object().shape({
    firstname: Yup.string().min(2, 'Too Short').max(25, 'Too Long').required("This field is Required"),
    email: Yup.string().email('Invalid Email').required("This field is Required"),
    password: Yup.string().min(8, "Password Must be 8 character").required("This field is Required"),
})