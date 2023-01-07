import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { TUser } from "../../redux/slices/users";
import Button from "../button/Button";
import "./style.scss";

type TUserWidget = {
  user: TUser;
};

const UserWidget: FC<TUserWidget> = ({ user }) => {
  const navigate = useNavigate()

  return (
    <div className="user-widget" data-testid="user-widget">
      <div className="user-container" data-testid="user-container">
        <div className="user-info" data-testid="user-info">
          <div className="avatar" data-testid="avatar">
            <img src={require(`../../assets/${user.photo}`)} data-testid="img" alt="avatar" />
          </div>
          <div className="info" data-testid="info">
            <p className="bold" data-testid="bold">{user.name}</p>
            <p>{user.nickname}</p>
          </div>
        </div>
        <div className="view-btn" data-testid="view-btn">
          <Button text="View" handleClick={() => navigate(`/user/${user.phone}`, {state: user})}/>
        </div>
      </div>
    </div>
  );
};

export default UserWidget;
