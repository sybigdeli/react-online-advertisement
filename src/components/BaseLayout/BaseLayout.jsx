import { Link, Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import hamburger from "@/assets/icons/hamburger.png";
import LoginIcon from "@/assets/icons/login-icon.png";
import Logo from "../UI/Logo";

function BaseLayout() {
  return (
    <>
      <header className="flex justify-between items-center p-3 lg:flex-grow lg:w-full">
        <button className="w-8 md:w-10 shadow rounded p-2 lg:hidden">
          <img src={hamburger} className="w-full" />
        </button>

        <div className="lg:hidden">
          <Logo />
        </div>

        <Link to="/Login" className="w-8 md:10 lg:hidden shadow rounded p-2">
          <img src={LoginIcon} />
        </Link>

        <Header />
      </header>
      <Outlet />
      <Footer />
    </>
  );
}

export default BaseLayout;
