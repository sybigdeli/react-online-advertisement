import Button from "@/components/UI/Button";
import FormLogin from "@/components/UI/FormLogin";
import { z } from "zod";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useAuthContext } from "@/providers/AuthProvider";

const registerSchema = z.object({
  username: z
    .string()
    .min(4, { message: "نام کاربری باید حداقل 4 نویسه باشد" }),
  password: z
    .string()
    .min(8, { message: "نام کاربری باید حداقل 8 نویسه باشد" }),
});

function LoginForm() {
  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
  });
  const [unknownError, setUnknownError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  const { saveAccessToken } = useAuthContext();
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (loading) return;
    setUnknownError(null);
    const validation = registerSchema.safeParse(loginForm);

    if (!validation.success) {
      setError(validation.error.format());
      return;
    }

    try {
      setLoading(true);

      const result = await axios.post(
        "https://6544e9685a0b4b04436d3239.mockapi.io/api/", //"http://demo2578450.mockable.io/auth/login",
        validation.data
      );
      console.log(result);
      saveAccessToken(result.data.token.accessToken);
    } catch (error) {
      console.log(error);
      setUnknownError("خطایی در ثبت نام رخ داده است");
    } finally {
      setLoading(false);
    }
  };

  const handleChangeLoginForm = (e, key) => {
    setError((s) => ({ ...s, [key]: null }));
    setLoginForm((s) => ({ ...s, [key]: e.target.value }));
  };

  return (
    <form
      onSubmit={() => handleSubmit}
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
      <Button type="submit" variant="fill" onClick={handleSubmit}>
        ورود
      </Button>
      <div className="flex flex-warp justify-center items-center gap-1.5">
        <p className="text-center">حساب کاربری ندارید ؟</p>
        <Link to="/auth/sign-up" className="text-center">
          ایجاد حساب کاربری
        </Link>
      </div>
      {unknownError && (
        <div className="bg-yellow-100 px-4 py-2 rounded text-red-600">
          {unknownError}
        </div>
      )}
    </form>
  );
}

export default LoginForm;
