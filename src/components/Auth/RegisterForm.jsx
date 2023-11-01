import axios from "axios";
import FormLogin from "@/components/UI/FormLogin";
import Button from "../UI/Button";
import { useState } from "react";
import { Link } from "react-router-dom";
import { registerSchema } from "@/components/Auth/schema";

function RegisterForm() {
  const [unknownError, setUnknownError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  const [RegisterForm, setRegisterForm] = useState({
    username: "",
    password: "",
    confirm_password: "",
  });

  const handleChangeRegisterForm = (e, key) => {
    setError((s) => ({ ...s, [key]: null }));
    setRegisterForm((s) => ({ ...s, [key]: e.target.value }));
  };

  const handleRegister = async (event) => {
    event.preventDefault();

    if (loading) return;

    setUnknownError(null);
    const { success, error, data } = registerSchema.safeParse(RegisterForm);

    if (!success) {
      setError(error.format());
      return;
    }

    try {
      setLoading(true);

      const result = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        data
      );
      console.log(result);
    } catch (error) {
      console.log(error);
      setUnknownError("خطایی در ثبت نام رخ داده است");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleRegister}
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
        inputName="user-confirm-pass"
        inputType="password"
        error={error.confirm_password?._errors?.[0]}
        label="تکرار رمز عبور"
        placeHolder="رمز عبور خود را مجدد وارد کنید"
        value={RegisterForm.confirm_password}
        onChange={(e) => handleChangeRegisterForm(e, "confirm_password")}
      />
      <Button type="submit" variant="fill" loading={loading}>
        ثبت نام
      </Button>
      <div className="flex flex-warp justify-center items-center gap-1.5">
        <p className="text-center">حساب کاربری دارید ؟</p>
        <Link to="/auth/sign-in" className="text-center">
          ورود کنید
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

export default RegisterForm;
