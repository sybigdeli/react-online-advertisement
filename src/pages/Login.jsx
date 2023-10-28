import LoginImageDesktop from "@/assets/images/LoginImage.png";
import LoginImageMobile from "@/assets/images/LoginImageMobile.png";
import Button from "@/components/UI/Button";
import FormLogin from "@/components/UI/FormLogin";
import Logo from "@/components/UI/Logo";
import { useState } from "react";
const Login = () => {
  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(loginForm);
  };

  const handleChangeLoginForm = (e , key) => {
    setLoginForm((s) => ({...s , [key] : e.target.value}))
  }
  return (
    <div className="flex flex-col-reverse justify-end h-screen gap-8 md:flex-row md:justify-center md:items-center md:p-8 md:overflow-hidden">
      <div className="basis-1/2 rounded-lg flex flex-col flex-grow justify-center items-center gap-8 px-4">
        <div className="w-full flex justify-center items-center">
          <Logo />
        </div>
        <form
          onSubmit={(event) => handleSubmit}
          className="w-full max-w-md shadow flex flex-col justify-center items-center gap-6 px-6 py-12"
        >
          <h4 className="text-center text-zinc-800 text-xl font-bold">ورود</h4>
          <FormLogin
            inputName="user-name"
            inputType="text"
            label="نام کاربری"
            placeHolder="نام کاربری خود را وارد کنید"
            value={loginForm.username}
            onChange={(e) => handleChangeLoginForm(e , "username")}
          />
          <FormLogin
            inputName="user-pass"
            inputType="password"
            label="رمز عبور"
            placeHolder="رمز عبور خود را وارد کنید"
            value={loginForm.password}
            onChange={(e) => handleChangeLoginForm(e , "password")}
          />
          <div className="w-full flex items-start">
            <p className="text-center text-zinc-800 text-sm font-bold">
              رمز عبور خود را فراموش کرده اید؟
            </p>
          </div>
          <Button variant="fill" onClick={handleSubmit}>
            ورود
          </Button>
          <div className="flex flex-warp justify-center items-center gap-1.5">
            <p className="text-center">حساب کاربری ندارید ؟</p>
            <p className="text-center">ایجاد حساب کاربری</p>
          </div>
        </form>
      </div>

      <div className="basis-1/2 self-stretch relative rounded-3xl overflow-hidden">
        <img src={LoginImageMobile} className="w-full md:hidden" />
        <img
          src={LoginImageDesktop}
          className="hidden md:block absolute w-full h-full object-cover object-center"
        />
      </div>
    </div>
  );
};

export default Login;
