import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  // <a/> elements have the built in role of "link"
  const linkElement = screen.getByRole("link", {
    name: /learn testing library/i,
  });
  expect(linkElement).toBeInTheDocument();
});
