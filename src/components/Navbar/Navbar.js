import { useState } from "react";
import navbar from "./Navbar.module.css";
import logo from "../../images/uzb.jpg";
import { NavLink } from "react-router-dom";
import Auth from "./Auth/Auth";

const Navbar = () => {
  const [inputValue, setInputValue] = useState("");

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className={navbar.bg}>
      <div className={navbar.navbar}>
        <div className={navbar.image}>
          <NavLink to="/" className={navbar.logo__image}>
            <img src={logo} alt="" />
          </NavLink>
        </div>
        <div className={navbar.menu}>
          <ul>
            <NavLink
              className={`${navbar.link} ${navbar.link__menu}`}
              to="/routes"
            >
              <li>Marshrutlar</li>
            </NavLink>
            <NavLink
              className={`${navbar.link} ${navbar.link__menu}`}
              to="/travelers"
            >
              <li>Sayohatchilar</li>
            </NavLink>
            <NavLink
              className={`${navbar.link} ${navbar.link__menu}`}
              to="/tours"
            >
              <li>Turlar</li>
            </NavLink>
            <NavLink
              className={`${navbar.link} ${navbar.link__menu}`}
              to="/lessons"
            >
              <li>Darslar</li>
            </NavLink>
            <NavLink
              className={`${navbar.link} ${navbar.link__menu}`}
              to="/lodging"
            >
              <li>Yashash</li>
            </NavLink>
            <NavLink
              className={`${navbar.link} ${navbar.link__menu}`}
              to="/guide"
            >
              <li>Qo'llanma</li>
            </NavLink>
          </ul>
        </div>
        <div className={navbar.auth}>
          {/* <NavLink
            to="/auth"
          > */}
          <div
            className={`${navbar.link} ${navbar.link__auth}`}
            onClick={openModal}
          >
            <p className={navbar.auth__authorization}>
              Avtorizatsiya <i className="fas fa-user"></i>
            </p>
          </div>
          <div>
            <Auth
              openModal={openModal}
              closeModal={closeModal}
              modalIsOpen={modalIsOpen}
            />
          </div>
          {/* </NavLink> */}
          <form className={navbar.form}>
            <input
              className={navbar.input}
              type="text"
              value={inputValue}
              name="search"
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Sayt bo'yicha qidiruv"
              required
            />
            <a
              href={`/?search=${inputValue}`}
              className={`${navbar.input__icon} ${navbar.link__i}`}
            >
              <i className={`fas fa-search`}></i>
            </a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
