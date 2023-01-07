import React from "react";
import { render, screen } from "@testing-library/react";
import { store } from "../../redux/store";
import Wrapper from "./Wrapper";
import Widget from "../../screens/widget/Widget";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import User from "../../screens/user/User";

test("renders Wrapper clases", () => {
  render(<Wrapper />);
  expect(screen.getByTestId("wrapper")).toHaveClass("wrapper");
  expect(screen.getByTestId("container")).toHaveClass("container");
});

test("renders Widget in Wrapper", () => {
  render(
    <Wrapper
      children={
        <Provider store={store}>
          <MemoryRouter>
            <Widget />
          </MemoryRouter>
        </Provider>
      }
    />
  );
  expect(screen.getByTestId("wrapper")).toContainElement(screen.getByTestId("widget"))
  screen.getAllByTestId("user-widget").forEach((el)=>{
    expect(screen.getByTestId("wrapper")).toContainElement(el)
  })
  expect(screen.getByText(/Viev all/i)).toBeInTheDocument();
});

test("renders User in Wrapper", () => {
    render(
      <Wrapper
        children={
          <Provider store={store}>
            <MemoryRouter>
              <User />
            </MemoryRouter>
          </Provider>
        }
      />
    );
    expect(screen.getByTestId("wrapper")).toContainElement(screen.getByTestId("user"))
    expect(screen.getByTestId("img")).toHaveAttribute("alt", "avatar");
    expect(screen.getByTestId("user-header")).toHaveClass("user-header");
    expect(screen.getByTestId("user-info")).toHaveClass("user-info");
    expect(screen.getByTestId("user-button")).toHaveClass("user-button");
    expect(screen.getByText(/Phone/i)).toBeInTheDocument();
    expect(screen.getByText(/URL/i)).toBeInTheDocument();
    expect(screen.getByText(/Email/i)).toBeInTheDocument();
    expect(screen.getByText(/Send message/i)).toBeInTheDocument();
  });
