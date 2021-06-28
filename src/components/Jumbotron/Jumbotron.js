import React, { useEffect } from "react";
import jumbotron from "./Jumbotron.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Search from "../Search/Search";

const Jumbotron = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
    AOS.refresh();
  }, []);

  return (
    <div className={jumbotron.jumbotron}>
      {/* <p
        className={jumbotron.jumbotron__title}
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
      >
        Qashqadaryoga xush kelibsiz!
        {/* <i
            class="fas fa-arrow-down"
            data-aos="fade-down"
            data-aos-delay="300"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          ></i>
      </p> */}
      <div className={jumbotron.search}>
        <div data-aos="zoom-in">
          <Search />
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
