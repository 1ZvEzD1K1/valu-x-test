import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Close from "../../assets/Close";
import "./style.scss";

const data_testprops = {
  phone: "902-788-3568",
  name: "Zian Khyre",
  nickname: "@ziankhyre",
  email: "zian.khyre@fallinhay.com",
  position: "General worker/Works for food",
  photo: "8.jpg",
};

const User = () => {
  const history = useNavigate();
  const { state } = useLocation();

  return (
    <div className="user" data-testid="user">
      <div className="close-btn" data-testid="close-btn">
        <Close handleClick={() => history("/")} />
      </div>
      <div className="user-header" data-testid="user-header">
        <img src={require(`../../assets/${state ? state.photo: data_testprops.photo}`)} data-testid="img" alt="avatar" />
        <p>
          <strong>{state ? state.name : data_testprops.name} : </strong>
        </p>
        <p>{state ? state.position : data_testprops.position}</p>
      </div>
      <div className="user-info" data-testid="user-info">
        <p>
          <strong>Phone</strong>
          {state ? state.phone : data_testprops.phone}
        </p>
        <p>
          <strong>URL</strong>http://{state ? state.nickname.slice(1) : data_testprops.nickname.slice(1)}
        </p>
        <p>
          <strong>Email</strong>
          {state ? state.email : data_testprops.email}
        </p>
      </div>
      <div className="user-button" data-testid="user-button">
        <button>Send message</button>
      </div>
    </div>
  );
};

export default User;
