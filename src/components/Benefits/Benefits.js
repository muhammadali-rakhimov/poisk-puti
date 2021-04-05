import React, { useEffect } from "react";
import Benefit from "./Benefit/Benefit";
import benefits from "./Benefits.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Benefits = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    AOS.refresh();
  }, []);

  return (
    <div className={benefits.div}>
      <div className={benefits.about}>
        <p className={benefits.title} data-aos="fade-right">
          TatuTurizm - sayyohlar va avantyuristlar jamoasi
        </p>
        <br />
        <p className={benefits.description} data-aos="fade-left">
          Mustaqil yoki uyushtirilgan bayramni rejalashtirish va bu erda sayohat
          qilish uchun pul topish
        </p>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className={benefits.benefit} data-aos="">
        <Benefit
          icon={"fas fa-map-marker-alt"}
          description={
            "Yangilarini qo'shib ishlang yoki tayyor yo'nalishlarni tanlang"
          }
          aosIcon="fade-right"
          aosText="fade-left"
        />
        <Benefit
          icon={"fas fa-people-carry"}
          description={"Boshqa jamoat a'zolari bilan ta'tilni tashkil qiling"}
          aosIcon="zoom-in"
          aosText="slide-up"
        />
        <Benefit
          icon={"fas fa-person-booth"}
          description={
            "Qo'llanmalar va o'qituvchilarni oling yoki o'zingizning sayohatlaringiz va darslaringizni taklif qiling"
          }
          aosIcon="fade-left"
          aosText="fade-right"
        />
        <Benefit
          icon={"fas fa-laptop-house"}
          description={
            "Yo'lda ta'tilni ijaraga oling yoki o'zingiznikiga joylashtiring"
          }
          aosIcon="zoom-in"
          aosText="slide-up"
        />
        <Benefit
          icon={"fas fa-passport"}
          description={
            "Yangiliklar, foydali maqolalar va Qo'llanma da muhofaza qilinadigan hududlarning malumotnomasi"
          }
          aosIcon="fade-right"
          aosText="fade-left"
        />
      </div>
      <br />
      <p className={benefits.getit}>Kiring va Ro'yxatdan o'ting va oling</p>
      <p className={benefits.getit__description}>
        ZARURIY SAYT QURILMALARIGA HOZIRDA FOYDALANISH BEPUL!
      </p>
      <button className={benefits.avtorizatsiya}>Avtorizatsiya</button>
    </div>
  );
};

export default Benefits;
