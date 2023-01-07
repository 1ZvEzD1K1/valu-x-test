import React from "react";
import Button from "../../components/button/Button";
import UserWidget from "../../components/user-widget/UserWidget";
import { setCount } from "../../redux/slices/users";
import { useAppDispatch, useTypedSelector } from "../../redux/store";
import "./style.scss";

const Widget = () => {
  const dispatch = useAppDispatch();
  const { users, count } = useTypedSelector((store) => store.users);

  return (
    <div className="widget" data-testid="widget">
      {users.slice(0, count).map((el) => {
        return <UserWidget key={el.phone} user={el} />;
      })}
      {count !== users.length ? (
        <Button
          handleClick={() => dispatch(setCount(users.length))}
          text="Viev all"
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Widget;
