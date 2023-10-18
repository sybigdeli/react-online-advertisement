import Button from "./UI/Button";
import Logo from "./UI/Logo";
import DownImage from "../assets/icons/down.svg";

function Header() {
  return (
    <div className="w-full flex justify-between items-center gap-10 px-[60px] py-[30px]">
      <div className="flex flex-row items-center justify-center gap-[20px]">
        <div className="flex flex-row items-center justify-center gap-[5px]">
          <img
            src={DownImage}
            className="opacity-50 flex-col justify-start items-start"
          />
          <p className="text-right text-stone-500 text-sm leading-none tracking-tight">
            English
          </p>
        </div>

        <div className="flex flex-row items-center justify-center gap-[5px]">
          <img
            src={DownImage}
            className="opacity-50 flex-col justify-center items-center"
          />
          <p className="text-right text-stone-500 text-sm leading-none tracking-tight">
            USA
          </p>
        </div>

        <Button variant="fill">Create a Post</Button>
        <Button variant="outline">Login</Button>
      </div>

      <Logo />
    </div>
  );
}

export default Header;
