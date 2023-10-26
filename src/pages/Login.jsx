import LoginImageDesktop from "@/assets/images/LoginImage.png";
import LoginImageMobile from "@/assets/images/LoginImageMobile.png";
import Button from "@/components/UI/Button";
import FormLogin from "@/components/UI/FormLogin";
import Logo from "@/components/UI/Logo";
const Login = () => {
  return (
    <div className="flex flex-col-reverse justify-end h-screen gap-8 md:flex-row md:justify-center md:items-center md:px-8 md:overflow-hidden">
      <div className="rounded-lg flex flex-col flex-grow justify-center items-center gap-8 px-4">
        <div className="w-full flex justify-center items-center">
          <Logo />
        </div>
        <div className="shadow flex flex-col justify-center items-center gap-6 px-6 py-12">
          <h4 className="text-center text-zinc-800 text-xl font-bold">ورود</h4>
          <FormLogin
            inputName="user-name"
            inputType="text"
            label="نام کاربری"
            placeHolder="نام کاربری خود را وارد کنید"
          />
          <FormLogin
            inputName="user-pass"
            inputType="password"
            label="رمز عبور"
            placeHolder="رمز عبور خود را وارد کنید"
          />
          <div className="w-full flex items-start">
            <p className='text-center text-zinc-800 text-sm font-bold'>
              رمز عبور خود را فراموش کرده اید؟
            </p>
          </div>
          <Button variant="fill">ورود</Button>
          <div className="flex flex-warp justify-center items-center gap-1.5">
            <p className="text-center">حساب کاربری ندارید ؟</p>
            <p className="text-center">ایجاد حساب کاربری</p>
          </div>
        </div>
      </div>
      
      <div className="object-cover">
        <img src={LoginImageMobile} className="w-full md:hidden" />
        <img src={LoginImageDesktop} className="hidden w-full md:flex" />
      </div>
    </div>
  );
};

export default Login;
