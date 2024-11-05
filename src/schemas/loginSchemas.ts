import * as yup from "yup";
const mobileReg =
  /(0|\+98)?([ ]|-|[()]){0,2}9[1|2|3|4]([ ]|-|[()]){0,2}(?:[0-9]([ ]|-|[()]){0,2}){8}/;
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{4,})/;
export const loginSchemas = yup.object().shape({
  phone: yup
    .string()
    .matches(mobileReg, "شماره موبایل نامعتبر است")
    .required("شماره موبایل الزامی است !"),
  password: yup
    .string()
    .min(4)
    .max(15)
    .matches(passwordRegex, "پسورد نامعتبر است")
    .required("پسورد الزامی هست"),
});
