import Button from "./UI/Button";
import Logo from "./UI/Logo";
import DownImage from "../assets/icons/down.svg";

function Header() {
  return (
    <div className="w-full flex justify-between items-center gap-10 px-16 py-7">
      <div className="flex flex-row items-center justify-center gap-3">
        <div className="px-1 flex flex-row items-center justify-center gap-1">
          <img
            src={DownImage}
            className="opacity-50 flex-col justify-start items-start"
          />
          <p className="text-right text-stone-500 text-sm leading-none tracking-tight">
            فارسی
          </p>
        </div>

        <div className="px-1 flex flex-row items-center justify-center gap-1">
          <img
            src={DownImage}
            className="opacity-50 flex-col justify-center items-center"
          />
          <p className="text-right text-stone-500 text-sm leading-none tracking-tight">
            ایران
          </p>
        </div>

        <Button variant="fill">ایجاد پست</Button>
        <Button variant="outline">ورود</Button>
      </div>

      <Logo />
    </div>
  );
}

export default Header;
