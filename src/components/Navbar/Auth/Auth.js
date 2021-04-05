import React, { useState } from "react";
import Modal from "react-modal";
import { useHistory } from "react-router";
import auth from "./Auth.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Auth = ({ openModal, closeModal, modalIsOpen }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [userInfo, setUserInfo] = useState("");

  const history = useHistory();

  const user = {
    username,
    password,
  };

  const formSubmit = (e) => {
    e.preventDefault();
    closeModal();
    history.push("/");
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify({ user }),
      headers: { "Content-type": "application/json" },
    }).then((res) => console.log(res));
    toast.success("Form Submitted!", {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  };

  const customStyles = {
    content: {
      width: "350px",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
    overlay: {
      backgroundColor: "rgba(200, 200, 200, 0.5)",
    },
  };

  Modal.setAppElement("#root");

  return (
    <div>
      <ToastContainer autoClose={2000} />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        shouldCloseOnOverlayClick={false}
        className={auth.modal}
      >
        <div className={auth.auth}>
          <h2>Avtorizatsiya</h2>
          <button onClick={closeModal}>x</button>
        </div>
        <br />
        <br />
        <form onSubmit={formSubmit} className={auth.auth__form}>
          <label className={auth.label}>Username yoki email</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label className={auth.label}>Parol</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input type="submit" value="Submit" />
        </form>
      </Modal>
    </div>
  );
};

export default Auth;
