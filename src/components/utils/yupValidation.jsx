import * as yup from "yup";

export const loginValidation = yup.object({
  username: yup
    .string()
    .required("Username is required")
    .min(5, "Username must be 5 characters or more"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be 8 characters or more")
    .matches(
      /(?=.*[0-9])(?=.*[A-Z])/,
      "At least one number and one uppercase letter"
    ),
});

export const registerValidation = yup.object({
  username: yup
    .string()
    .required("Username is required")
    .min(5, "Username must be 5 characters or more"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be 8 characters or more")
    .matches(
      /(?=.*[0-9])(?=.*[A-Z])/,
      "At least one number and one uppercase letter"
    ),
  phone: yup
    .string()
    .required("Phone Number is required")
    .matches(/^(?:\+20|0)1\d{9}$/, "Phone number is not correct!"),
  address: yup
    .string()
    .required("Address is required")
    .min(8, "address must be at least 8 characters"),
  email: yup.string().email(),
});
