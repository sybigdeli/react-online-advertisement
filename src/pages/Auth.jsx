import LoginImageDesktop from "@/assets/images/LoginImage.png";
import LoginImageMobile from "@/assets/images/LoginImageMobile.png";
import LoginForm from "@/components/Auth/LoginForm";
import RegisterForm from "@/components/Auth/RegisterForm";

import Logo from "@/components/UI/Logo";
import { useState } from "react";


const Auth = ({mode = "sign-in"}) => {
  return (
    <div className="flex flex-col-reverse justify-end h-screen gap-8 md:flex-row md:justify-center md:items-center md:p-8 md:overflow-hidden">
      <div className="basis-1/2 rounded-lg flex flex-col flex-grow justify-center items-center gap-8 px-4">
        <div className="w-full flex justify-center items-center">
          <Logo />
        </div>
        {mode === "sign-in" ? <LoginForm /> : <RegisterForm />}
      </div>

      <div className="basis-1/2 self-stretch relative rounded-3xl overflow-hidden">
        <img src={LoginImageMobile} className="w-full md:hidden absolute h-full object-cover object-center" />
        <img
          src={LoginImageDesktop}
          className="hidden md:block absolute w-full h-full object-cover object-center"
        />
      </div>
    </div>
  );
};

export default Auth;
