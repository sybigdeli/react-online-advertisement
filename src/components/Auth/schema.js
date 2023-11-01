import { z } from "zod";

const userNameSchema = z
.string()
.min(4, { message: "نام کاربری باید حداقل 4 نویسه باشد" })
const passWordSchema = z
.string()
.min(8, { message: "نام کاربری باید حداقل 8 نویسه باشد" })
.regex(/[A-Za-z]/, {message: ""})

const loginSchema = z.object({
  username: userNameSchema,
  password: passWordSchema,
})  

const registerSchema = z
  .object({
    username: userNameSchema,
    password: passWordSchema,
    confirm_password: passWordSchema,
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "رمز عبور با تکرار آن مطابقت ندارد",
    path: ["confirm_password"], // path of error
  });

export { loginSchema, registerSchema };
