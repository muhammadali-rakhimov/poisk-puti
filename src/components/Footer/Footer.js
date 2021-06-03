import React from "react";
import footer from "./Footer.module.css";
import logo from "../../images/doppi.jpg";

const Footer = () => {
  return (
    <div className={footer.footer}>
      <p className={footer.title}>Qashqadaryoga xush kelibsiz !</p>
      <p className={footer.quote}>Agar kimda-kim bizning qudratimizga shubxa qilsa, biz qurgan binolarga boqsin.
        <br />
        <p className={footer.author}>Amir Temur.</p>
      </p>
      <img className={footer.logo} src={logo} alt="logo_footer" />
      <p>Copyright © 2021</p>
    </div>
  );
};

export default Footer;
