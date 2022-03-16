import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

/**
 * As a general rule of thumb we should aim to have one assertion per test
 * however for functional testing it is not common to have multiple
 * i.e user clicks on button, we expect some change and test the assertion
 */
test("button has correct initial color", () => {
  render(<App />);

  const button = screen.getByRole("button", { name: /change to blue/i });

  // 1st assertion
  expect(button).toHaveStyle({ backgroundColor: "red" });

  fireEvent.click(button);

  // 2nd assertion
  // when an assertion fails, the rest of the test doesnt run
  expect(button).toHaveStyle({ backgroundColor: "blue" });
  expect(button).toHaveTextContent(/change to red/i);
  // expect(button.textContent).toBe(/change to red/i);
});
