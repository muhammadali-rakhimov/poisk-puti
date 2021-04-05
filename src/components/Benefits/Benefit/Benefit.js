import React, { useEffect } from "react";
import benefit from "./Benefit.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Benefit = ({ icon, description, aosIcon, aosText }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    AOS.refresh();
  }, []);

  return (
    <div className={benefit.div}>
      <div className={benefit.icon__div} data-aos={aosIcon}>
        <i className={`${icon} ${benefit.icon}`}></i>
      </div>
      <p className={benefit.description} data-aos={aosText}>
        {description}
      </p>
    </div>
  );
};

export default Benefit;
