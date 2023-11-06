import React from "react";
import appStoreLogo from "@/assets/icons/apple-app-store-badge 1.svg";
import googlePlayLogo from "@/assets/icons/Google_Play_Store_badge_EN 1.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  const footerLogos = [appStoreLogo, googlePlayLogo];

  const footerData = [
    {
      title: "ABOUT",
      rows: [
        "Aboug Craiglist",
        "Blog",
        "Best of Craiglist",
        "Careers",
        "Contanct Us",
        "Open Source",
      ],
    },
    {
      title: "HELP",
      rows: [
        "Abuse & Legal",
        "Feedback",
        "Avoiding Scams",
        "Personal Safety Tips",
        "Abuse & Legal",
        "Privacy Policy",
        "Site Map",

      ],
    },
  ];

  return (
    <footer
      dir="ltr"
      className="px-5 md:px-20 gap-6 md:gap-3 bg-primary-1100  pt-10"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="grid gap-6">
          <h3 className="text-lg text-textColor-600">{footerData[0].title}</h3>
          <ul className="grid grid-cols-2 grid-rows-3 gap-4 text-lg text-textColor-200">
            {footerData[0].rows.map((row, index) => (
              <li key={index} className="">
                <Link>{row}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="grid gap-6">
          <h3 className="text-lg text-textColor-600">{footerData[1].title}</h3>
          <ul className="grid grid-cols-3 grid-rows-3 gap-4 ">
            {footerData[1].rows.map((row, index) => (
              <li key={index} className="whitespace-nowrap">
                <a href=""> {row}</a>{" "}
              </li>
            ))}
          </ul>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 mx-auto my-0 gap-6 items-center">
          {footerLogos.map((logo, index) => (
            <img
              src={logo}
              key={index}
              alt="footer logo picture"
              className="mx-auto my-0 w-full"
            />
          ))}
        </div>
      </div>
      <div className="">
        <div className="h-1 w-full bg-primary-1000 mt-20"></div>
        <div className=" flex font-semibold  justify-center my-5">
        © 2021 Craigslist        </div>
      </div>
    </footer>
  );
};

export default Footer;
