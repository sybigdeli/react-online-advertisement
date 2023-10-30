import Button from "@/components/UI/Button";
import FormLogin from "@/components/UI/FormLogin";
import { z } from "zod";
import { useState } from "react";

const registerSchema = z.object({
  username: z.string().min(4 , {message: "نام کاربری باید حداقل 4 نویسه باشد"}),
  password: z.string().min(8 , {message: "نام کاربری باید حداقل 8 نویسه باشد"}),
});

function LoginForm() {
  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState({});
  const handleSubmit = (event) => {
    event.preventDefault();

    const validation = registerSchema.safeParse(loginForm);

    if(!validation.success) {
      setError(validation.error.format())
    }
  };

  const handleChangeLoginForm = (e , key) => {
    setError((s) => ({ ...s, [key]: null }));
    setLoginForm((s) => ({...s , [key] : e.target.value}))
  }
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
        value={loginForm.username}
        onChange={(e) => handleChangeLoginForm(e, "username")}
      />
      <FormLogin
        inputName="user-pass"
        inputType="password"
        error={error.password?._errors?.[0]}
        label="رمز عبور"
        placeHolder="رمز عبور خود را وارد کنید"
        value={loginForm.password}
        onChange={(e) => handleChangeLoginForm(e, "password")}
      />
      <div className="w-full flex items-start">
        <p className="text-center text-zinc-800 text-sm font-bold">
          رمز عبور خود را فراموش کرده اید؟
        </p>
      </div>
      <Button variant="fill" onClick={handleSubmit}>
        ورود
      </Button>
    </form>
  );
}

export default LoginForm;
