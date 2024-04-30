import * as Yup from "yup";

export const validationRegex = {
    email: /[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/,
    password:
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/,
};


export const SignupSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, "Too Short!")
        .max(500, "Too Long!")
        .required("Name is required"),
    email: Yup.string()
        .min(2, "Too Short!")
        .max(500, "Too Long!")
        .required("Email is required")
        .test("email-validation", "Enter valid email", (value) =>
            validationRegex.email.test(value)
        ),
    password: Yup.string()
        .min(2, "Too Short!")
        .max(500, "Too Long!")
        .required("Password is required")
        .test(
            "password-validation",
            `Length must be in the range [8-15] with one Numeric digit i.e. [0-9],one special character i.e. ['@', $,‘., #, !, %, *, ?, &, ^],one uppercase alphabet i.e. [A-Z] and one lowercase alphabet i.e. [a-z]`,
            (value) => validationRegex.password.test(value)
        ),
    gender: Yup.string()
        .min(2, "Too Short!")
        .max(500, "Too Long!")
        .required("Select gender"),
    language: Yup.string()
        .min(2, "Too Short!")
        .max(500, "Too Long!")
        .required("Select language"),
    address: Yup.string()
        .min(2, "Too Short!")
        .max(500, "Too Long!")
        .required("Enter address"),
});