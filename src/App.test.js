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
