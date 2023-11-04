import Button from "../UI/Button";
import Logo from "../UI/Logo";
import DownImage from "@/assets/icons/down.svg";
import Search from "../UI/Search";
import MapPin from "@/assets/icons/map-pin.svg";
// import ProfileImage from "@/assets/images/ProfileImage.svg";
import { useAuthContext } from "@/providers/AuthProvider";
import { Link } from "react-router-dom";

function HeaderSearch({ onClick }) {
  const { isLoggedIn, CurrentUser, logout } = useAuthContext();
  return (
    <div className="w-full flex justify-between items-center gap-10 px-[60px] py-[30px]">
      <div
        className="w-10 h-10 bg-slate-300 rounded-md lg:hidden"
        onClick={onClick}
      ></div>

      <div className="flex flex-row items-center justify-center gap-[20px]">
        <div className="flex flex-row items-center justify-center gap-2">
          {isLoggedIn ? (
            <div className="flex justify-center items-center gap-4 px-4 py-2 border-primary-600 border rounded-3xl">
              <img
                src={DownImage}
                className="opacity-50 flex-col justify-start items-start"
              />
              <p className="text-right text-black text-sm tracking-tight">
                liludori
              </p>
              <img
                src={CurrentUser?.avatar}
                className="w-10 h-10 rounded-full"
              />
              <Button variant="fill" onClick={logout}>
                خروج از حساب
              </Button>
            </div>
          ) : (
            <Button variant="outline">
              <Link to="/auth">ورود</Link>
            </Button>
          )}
        </div>
        <div className="hidden">
          <Button variant="fill">Create a Post</Button>
        </div>
      </div>
      <div className="hidden lg:flex flex-row items-center justify-end flex-grow gap-[20px]">
        <div className="flex-grow">
          <Search>Bicycle</Search>
        </div>
        <div className="flex flex-row items-center justify-center gap-1">
          <img
            src={DownImage}
            className="opacity-50 flex-col justify-start items-start"
          />
          <p>Austin, TX USA</p>
          <img
            src={MapPin}
            className="opacity-50 flex-col justify-start items-start"
          />
        </div>
        <Logo />
      </div>
    </div>
  );
}

export default HeaderSearch;
