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

  // check that the button starts out enabled
  const button = screen.getByRole("button", { name: /change to blue/i });
  expect(button).toBeEnabled();

  // check that the checkbox starts out unchecked
  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
});

/**
 * Spec: 1) When checkbox is unchecked the button is enabled
 *       2) when checkbox is checked the button is disabled
 */
test("checkbox disables on first click and enables on second click", () => {
  render(<App />);

  const button = screen.getByRole("button", { name: /change to blue/i });
  const checkbox = screen.getByRole("checkbox");

  // first click, checkbox is checked
  fireEvent.click(checkbox);
  expect(button).toBeDisabled();

  // first click, checkbox is unchecked
  fireEvent.click(checkbox);
  expect(button).toBeEnabled();
});
