import React, { FC, ReactNode } from "react";
import "./style.scss";

type TWrapper = {
  children?: ReactNode;
};

const Wrapper: FC<TWrapper> = ({ children }) => {
  return (
    <div className="wrapper" data-testid="wrapper">
      <div className="container" data-testid="container">{children}</div>
    </div>
  );
};

export default Wrapper;
