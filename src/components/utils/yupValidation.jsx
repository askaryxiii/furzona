import * as yup from "yup";

export const userValidation = yup.object({
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
