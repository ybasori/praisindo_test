import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

jest.mock("axios", () => ({
  data: { response: { docs: [] } },
}));

test("renders learn react link", () => {
  const { container } = render(<App />);
  expect(container).toMatchSnapshot();
});
