import React, { useEffect } from "react";
import jumbotron from "./Jumbotron.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Jumbotron = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
    AOS.refresh();
  }, []);

  return (
    <div className={jumbotron.jumbotron}>
      <p
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
      </p>
      <div className={jumbotron.arrowDown}>
      <div data-aos="fade-down"><i
          class="fas fa-arrow-down"
          data-aos="fade-down"
          data-aos-delay="300"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
        ></i>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
