import TextField from "../../components/TextField";
import { Link } from "@mui/material";
import toast from "react-hot-toast";
import { FieldValues, useForm } from "react-hook-form";
import { LuEyeOff, LuEye } from "react-icons/lu";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import axios from "axios";
import { signupSchemas } from "../../schemas/signupSchemas";
import Layout from "./Layouts";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
function SignUp() {
  const [togglePassword, setToggle] = useState(false);
  const {  isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    resetField,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signupSchemas),
  });
  const FormHandler = (data: FieldValues) => {
    if (data?.password === data?.password_confirmation) {
      axios
        .post("https://blog-02.liara.run/api/v1/auth/register", data)
        .then(({ data }) => {
          toast("حساب کاربری شما با موفقیت ساخته شد");
          navigate("/login");
        })
        .catch((err) => {
          toast.error("دوباره امتحان کنید");
        })
        .finally(() => {
          resetField("full_name");
          resetField("phone");
          resetField("password");
          resetField("password_confirmation");
        });
    }
  };
  if (isLoggedIn) {
    return navigate("/");
  }
  return (
    <Layout>
      <div className="flex flex-col">
        <div className="flex p-2 lg:p-12 flex-col  text-center">
          <p className=" font-bold text-lg">ساخت حساب کاربری</p>
          <p className=" font-light text-xs my-3">
            برای ساخت حساب کاربری ابتدا اطلاعات خود را وارد کنید
          </p>
          <form
            onSubmit={handleSubmit(FormHandler)}
            className="flex flex-col gap-y-2"
          >
            <TextField
              register={register}
              name={"full_name"}
              type={"text"}
              placeholder={"نام و نام خانوادگی"}
            />
            <p className="error">{errors.full_name?.message}</p>
            <TextField
              register={register}
              name="phone"
              type="r=txet"
              placeholder="شماره تماس"
            />
            <p className="error">{errors?.phone?.message}</p>

            <div className="flex items-center justify-between rounded-lg  bg-white">
              <TextField
                register={register}
                name={"password"}
                type={togglePassword ? "text" : "password"}
                placeholder={"رمز عبور"}
              />
              {togglePassword ? (
                <LuEye
                  onClick={() => setToggle(false)}
                  color="gray"
                  className="me-2 cursor-pointer"
                />
              ) : (
                <LuEyeOff
                  onClick={() => setToggle(true)}
                  color="gray"
                  className="me-2 cursor-pointer"
                />
              )}
            </div>
            <p className="error">{errors.password?.message}</p>
            <TextField
              register={register}
              name="password_confirmation"
              type="password"
              placeholder="تکرار رمز عبور"
            />
            <p className="error">{errors.password_confirmation?.message}</p>
            <div className="flex  text-gray-500 font-nunito text-xs">
              <Link href={"#"}>بازیابی رمز عبور</Link>
            </div>
            <button className="btn">ساخت حساب کاربری</button>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default SignUp;
