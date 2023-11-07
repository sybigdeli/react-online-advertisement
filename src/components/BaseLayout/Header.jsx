import Button from "../UI/Button";
import Logo from "../UI/Logo";
import DownImage from "@/assets/icons/down.svg";
import Search from "../UI/Search";
import MapPin from "@/assets/icons/map-pin.svg";
// import ProfileImage from "@/assets/images/ProfileImage.svg";
import { Link } from "react-router-dom";
import { useAuthContext } from "@/providers/AuthProvider";

function Header() {
  const { logout, CurrentUser, loadingCurrentUser, isLoggedIn } =
    useAuthContext();

  return (
    <header className="w-full flex justify-between items-center gap-10 px-[60px] py-[30px]">
      <div className="flex flex-row items-center justify-center gap-[20px]">
        <div className="flex flex-row items-center justify-center gap-2">
          {isLoggedIn ? (
            <div className="flex justify-center items-center gap-4 px-4 py-2 border-primary-600 border rounded-3xl">
              {loadingCurrentUser ? (
                <div className="w-10 h-10 p-5 bg-slate-300 rounded-full animate-pulse"></div>
              ) : (
                <img
                  src={CurrentUser?.avatar}
                  className="w-10 h-10 rounded-full"
                />
              )}
              <img
                src={DownImage}
                className="opacity-50 flex-col justify-start items-start"
              />
              <p className="text-right text-black text-sm tracking-tight">
                liludori
              </p>
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

        <Link to="/newADS">
          <Button variant="fill">ثبت آگهی جدید</Button>
        </Link>
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

        <Link to="/">
          <Logo />
        </Link>
      </div>
    </header>
  );
}

export default Header;
