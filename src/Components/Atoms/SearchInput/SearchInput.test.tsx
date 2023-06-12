import { render } from "@testing-library/react";
import SearchInput from "./SearchInput";
import { Provider } from "react-redux";
import { store } from "../../../Redux/store";

jest.mock("axios", () => ({
  data: { response: { docs: [] } },
}));

describe("Test SearchInput", () => {
  it("Snapshot", () => {
    const { container } = render(
      <Provider store={store}>
        <SearchInput />
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });
});
