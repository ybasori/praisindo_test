import { render } from "@testing-library/react";
import SearchArticle from "./SearchArticle";
import { Provider } from "react-redux";
import { store } from "../../../Redux/store";

jest.mock("axios", () => ({
  data: { response: { docs: [] } },
}));

describe("Test SearchArticle", () => {
  it("Snapshot", () => {
    const { container } = render(
      <Provider store={store}>
        <SearchArticle />
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });
});
