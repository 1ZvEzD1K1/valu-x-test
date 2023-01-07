import React from "react";
import { Route, Routes } from "react-router-dom";
import Wrapper from "../components/wrapper/Wrapper";
import User from "./user/User";
import Widget from "./widget/Widget";

const MainNavigator = () => {
  return (
    <Wrapper>
      <Routes>
        <Route path="/" element={<Widget />} />
        <Route path="/user/:id" element={<User />} />
      </Routes>
    </Wrapper>
  );
};

export default MainNavigator;
