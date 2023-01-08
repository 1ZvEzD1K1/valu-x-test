import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Button from "./Button";
import { useDispatch } from "react-redux";

jest.mock("react-redux");
const useDispatchMock = useDispatch as jest.Mock;

const mockDispatch = jest.fn();
const setCount = jest.fn();

useDispatchMock.mockImplementation(() => {
    return jest.fn().mockImplementation((action) => {
      switch (action.type) {
        case 'users/setCount':
            setCount();
            break;
        default:
            mockDispatch(action(useDispatchMock).arg);
            break;
      }
    });
  });

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
