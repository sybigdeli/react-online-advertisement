import React from "react";
import appStoreLogo from "../assets/icons/apple-app-store-badge 1.svg";
import googlePlayLogo from "../assets/icons/Google_Play_Store_badge_EN 1.svg";
import { stringify } from "postcss";

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
        "Avoiding Scams & Fraud",
        "Personal Safety Tips",
        "Abuse & Legal",
        "Privacy Policy",
        "Site Map",
        "Site Map",
      ],
    },
  ];

  return (
    <footer className="px-[70px] gap-3 ">
      <div className="flex justify-between">
        <div className="">
          <h3>{footerData[0].title}</h3>
          <br />
          <ul className="grid grid-cols-2 grid-rows-3 gap-4 gap-x-10">
            {footerData[0].rows.map((row) => (
              <li className="">
                <a href="">{row}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="mx-4">
          <h3>{footerData[1].title}</h3>
          <br />
          <ul className="grid grid-cols-3 grid-rows-3 gap-4">
            {footerData[1].rows.map((row) => (
              <li>
                <a href=""> {row}</a>{" "}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex gap-6 left-0">
          {footerLogos.map((logo, index) => (
            <img src={logo} key={index} alt="footer logo picture" />
          ))}
        </div>
      </div>
      <div className="">
        <hr />
        <div className=" flex  justify-center my-5 font-thin">
          2021 Craigstlist
        </div>
      </div>
    </footer>
  );
};

export default Footer;
