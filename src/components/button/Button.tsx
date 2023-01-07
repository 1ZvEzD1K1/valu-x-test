import React, { FC } from "react";
import "./style.scss";

type TButton = {
  handleClick?: () => void;
  text: string;
};

const Button: FC<TButton> = ({ handleClick, text }) => {
  return <button data-testid="button" onClick={handleClick}>{text}</button>;
};

export default Button;
