import React from "react";
import footer from "./Footer.module.css";
import logo from "../../images/doppi.jpg";

const Footer = () => {
  return (
    <div className={footer.footer}>
      <p className={footer.title}>Qashqadaryoga xush kelibsiz !</p>
      <img className={footer.logo} src={logo} alt="logo_footer" />
      <p>Copyright © 2021</p>
    </div>
  );
};

export default Footer;
