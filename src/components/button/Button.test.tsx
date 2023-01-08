import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Button from "./Button";
import { useDispatch } from "react-redux";

jest.mock("react-redux");
const useDispatchMock = useDispatch as jest.Mock;
const setCount = jest.fn();

test("renders button 1", () => {
  render(<Button text="View all" />);
  const textBtn = screen.getByText(/View all/i);
  expect(textBtn).toBeInTheDocument();
  expect(textBtn).toBeVisible();
});

test("renders button 2", () => {
  render(<Button text="View" />);
  const textBtn = screen.getByText(/View/i);
  expect(textBtn).toBeInTheDocument();
  expect(textBtn).toBeVisible();
});

test("disabled button", () => {
  render(<Button text="View" />);
  expect(screen.getByTestId("button")).not.toBeDisabled();
  expect(screen.getByTestId("button")).toBeEnabled();
});

test("click btn and test usedispatch", () => {
  render(<Button text="View all" handleClick={() => useDispatchMock(setCount(5))} />);
  fireEvent.click(screen.getByTestId('button'))
  expect(setCount).not.toBeCalledWith(9);
  expect(setCount).toBeCalledWith(5);
});
