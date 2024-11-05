import Layout from "./Layouts";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { FieldValues, useForm } from "react-hook-form";
import { loginSchemas } from "../../schemas/loginSchemas";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";
import axios from "axios";
import TextField from "../../components/TextField";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { useState } from "react";

function Login() {
  const { isLoggedIn, login } = useAuth();
  const navigate = useNavigate();
  const [togglePassword, setToggle] = useState(false);
  const {
    register,
    resetField,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchemas),
  });
  const FormHandler = (data: FieldValues) => {
    axios
      .post("https://blog-02.liara.run/api/v1/auth/login", data)
      .then(({ data }) => {
        login(data.data);
      })
      .catch((err) => {
        alert("error");
        toast.error("دوباره امتحان کنید");
      })
      .finally(() => {
        resetField("phone");
        resetField("password");
      });
  };
  if (isLoggedIn) {
    return navigate("/");
  }
  return (
    <Layout>
      <div className="flex flex-col">
        <div className="flex p-2 lg:p-12 flex-col  text-center">
          <p className=" font-bold text-lg">ورود به حساب کاربری</p>
          <p className=" font-light text-xs my-3">
            برای ورود به حساب کاربری ابتدا اطلاعات خود را وارد کنید
          </p>
          <form
            onSubmit={handleSubmit(FormHandler)}
            className="flex flex-col gap-y-2"
          >
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
            <button className="btn">ورود حساب کاربری</button>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default Login;
