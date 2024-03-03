import { images } from "./images";

export const SignUpFormData = [
    { key: 1, field: "fullname", placeholder: "Enter your full name", fieldHeader: "Full Name", icon: images.userIcon },
    { key: 2, field: "email", placeholder: "Enter UserName", fieldHeader: "Email Address", icon: images.emailIcon },
    { key: 3, field: "password", password: true, placeholder: "Enter Password", fieldHeader: "Password", icon: images.lockIcon },
]

export const SignInFormData = [
    { key: 2, field: "email", placeholder: "Enter UserName", fieldHeader: "Email Address", icon: images.emailIcon },
    { key: 3, field: "password", password: true, placeholder: "Enter Password", fieldHeader: "Password", icon: images.lockIcon },
]