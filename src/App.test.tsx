import React from "react";
import { render } from "@testing-library/react";
import Panel from "./Panel";

test("renders learn react link", () => {
  render(<Panel />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
