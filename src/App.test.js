import { render, screen } from "@testing-library/react";
import App from "./App";

// 2. Write test that fails
test("button has correct initial color", () => {
  // render component
  render(<App />);

  // get element by accessibility handler
  // this tests that it 1) renders 2) has proper text
  /**
   * screen.getByRole(role, options)
   * {name: 'some string'} can either be a form label, text in a button or aria-label
   * https://testing-library.com/docs/queries/byrole/
   */
  const button = screen.getByRole("button", { name: /change to blue/i });

  expect(button).toHaveStyle({ backgroundColor: "red" });
});

test("button turns blue when clicked", () => {});
