import FormLogin from "@/components/UI/FormLogin";
import Button from "../UI/Button";
import { useState } from "react";
import { z } from "zod";

const registerSchema = z.object({
  username: z.string().min(4 , {message: "نام کاربری باید حداقل 4 نویسه باشد"}),
  password: z.string().min(8 , {message: "نام کاربری باید حداقل 8 نویسه باشد"}),
  confirm_password: z.string().min(8 , {message: "نام کاربری باید حداقل 8 نویسه باشد"}),
});

function RegisterForm() {
  const [RegisterForm, setRegisterForm] = useState({
    username: "",
    password: "",
    confirm_password: "",
  });
  const [error, setError] = useState({});
  const handleRegister = (event) => {
    event.preventDefault();

    const validation = registerSchema.safeParse(RegisterForm);

    if(!validation.success) {
      setError(validation.error.format())
    }
  };

  const handleChangeRegisterForm = (e, key) => {
    setError((s) => ({ ...s, [key]: null }));
    setRegisterForm((s) => ({ ...s, [key]: e.target.value }));
  };
  return (
    <form
      onSubmit={(event) => handleSubmit}
      className="w-full max-w-md shadow flex flex-col justify-center items-center gap-6 px-6 py-12"
    >
      <h4 className="text-center text-zinc-800 text-xl font-bold">ورود</h4>
      <FormLogin
        inputName="user-name"
        inputType="text"
        error={error.username?._errors?.[0]}
        label="نام کاربری"
        placeHolder="نام کاربری خود را وارد کنید"
        value={RegisterForm.username}
        onChange={(e) => handleChangeRegisterForm(e, "username")}
      />
      <FormLogin
        inputName="user-pass"
        inputType="password"
        error={error.password?._errors?.[0]}
        label="رمز عبور"
        placeHolder="رمز عبور خود را وارد کنید"
        value={RegisterForm.password}
        onChange={(e) => handleChangeRegisterForm(e, "password")}
      />
      <FormLogin
        inputName="user-pass"
        inputType="password"
        error={error.confirm_password?._errors?.[0]}
        label="تکرار رمز عبور"
        placeHolder="رمز عبور خود را مجدد وارد کنید"
        value={RegisterForm.confirm_password}
        onChange={(e) => handleChangeRegisterForm(e, "confirm_password")}
      />
      <Button variant="fill" onClick={handleRegister}>
        ثبت نام
      </Button>
    </form>
  );
}

export default RegisterForm;
