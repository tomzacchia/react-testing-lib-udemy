import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("button has correct initial color", () => {
  render(<App />);

  const button = screen.getByRole("button", { name: /change to blue/i });

  expect(button).toHaveStyle({ backgroundColor: "red" });

  fireEvent.click(button);

  expect(button).toHaveStyle({ backgroundColor: "blue" });
  expect(button).toHaveTextContent(/change to red/i);
  // expect(button.textContent).toBe(/change to red/i);
});

test("initial condition", () => {
  render(<App />);

  const button = screen.getByRole("button", { name: /change to blue/i });
  expect(button).toBeEnabled();

  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
});

test("checkbox disables on first click and enables on second click", () => {
  render(<App />);

  const button = screen.getByRole("button", { name: /change to blue/i });
  // NOTE: When using name option with getByRole("checkbox"), react-testing-lib
  // knows to look for label associated with checkbox
  const checkbox = screen.getByRole("checkbox", { name: /disable button/i });

  fireEvent.click(checkbox);
  expect(button).toBeDisabled();

  fireEvent.click(checkbox);
  expect(button).toBeEnabled();
});

test("button background turns grey when disabled", () => {
  render(<App />);

  const button = screen.getByRole("button", { name: /change to blue/i });
  const checkbox = screen.getByRole("checkbox", { name: /disable button/i });

  // disabled button --> button is gray --> enable button --> button is red
  fireEvent.click(checkbox);
  expect(button).toHaveStyle({ backgroundColor: "grey" });
});
