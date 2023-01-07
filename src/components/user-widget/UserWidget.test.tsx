import React from "react";
import { render, screen } from "@testing-library/react";
import UserWidget from "./UserWidget";
import { MemoryRouter } from "react-router-dom";

const user = {
  phone: "902-788-3568",
  name: "Zian Khyre",
  nickname: "@ziankhyre",
  email: "zian.khyre@fallinhay.com",
  position: "General worker/Works for food",
  photo: "8.jpg",
};

test("renders UserWidget", () => {
  render(
    <MemoryRouter>
      <UserWidget user={user} />
    </MemoryRouter>
  );
  expect(screen.getByText(/View/i)).toBeInTheDocument();
  expect(screen.getByText(/View/i)).toBeVisible();
  expect(screen.getByText(/Zian Khyre/i)).toBeInTheDocument();
  expect(screen.getByText(/@ziankhyre/i)).toBeInTheDocument();
  expect(screen.getByTestId("button")).toBeEnabled();
});

test("renders UserWidget clases", () => {
  render(
    <MemoryRouter>
      <UserWidget user={user} />
    </MemoryRouter>
  );
  expect(screen.getByTestId("user-widget")).toHaveClass("user-widget");
  expect(screen.getByTestId("user-container")).toHaveClass("user-container");
  expect(screen.getByTestId("user-info")).toHaveClass("user-info");
  expect(screen.getByTestId("avatar")).toHaveClass("avatar");
  expect(screen.getByTestId("info")).toHaveClass("info");
  expect(screen.getByTestId("bold")).toHaveClass("bold");
  expect(screen.getByTestId("view-btn")).toHaveClass("view-btn");
  expect(screen.getByTestId("img")).toHaveAttribute("alt", "avatar");
});
