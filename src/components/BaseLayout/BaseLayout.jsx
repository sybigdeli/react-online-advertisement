import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

function BaseLayout() {
  return (
    <>
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default BaseLayout;
