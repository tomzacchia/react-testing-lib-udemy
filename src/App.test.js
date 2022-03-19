import { fireEvent, render, screen } from "@testing-library/react";
import App, { replaceCamelWithSpace } from "./App";

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

test("Disabled button has grey background and reverts to red", () => {
  render(<App />);

  const button = screen.getByRole("button", { name: /change to blue/i });
  const checkbox = screen.getByRole("checkbox", { name: /disable button/i });

  // disabled button
  fireEvent.click(checkbox);
  expect(button).toHaveStyle({ backgroundColor: "grey" });

  // re-enable button
  fireEvent.click(checkbox);
  expect(button).toHaveStyle({ backgroundColor: "red" });
});

test("Clicked disabled button has grey background and reverts to blue", () => {
  render(<App />);

  const button = screen.getByRole("button", { name: /change to blue/i });
  const checkbox = screen.getByRole("checkbox", { name: /disable button/i });

  // turn button blue and disabled
  fireEvent.click(button);
  fireEvent.click(checkbox);
  expect(button).toHaveStyle({ backgroundColor: "grey" });

  // re-enable button
  fireEvent.click(checkbox);
  expect(button).toHaveStyle({ backgroundColor: "blue" });
});

describe("spaces before camel-case letters", () => {
  test("Works for no inner capital letters", () => {
    expect(replaceCamelWithSpace("Red")).toBe("Red");
  });
  test("Works for one inner capital letter", () => {
    expect(replaceCamelWithSpace("MidnightBlue")).toBe("Midnight Blue");
  });
  test("Works for multiple inner capital letters", () => {
    expect(replaceCamelWithSpace("MediumVioletRed")).toBe("Medium Violet Red");
  });
});
