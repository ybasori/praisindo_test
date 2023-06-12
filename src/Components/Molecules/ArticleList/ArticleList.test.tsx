import { render } from "@testing-library/react";
import ArticleList from "./ArticleList";
import { store } from "../../../Redux/store";
import { Provider } from "react-redux";

jest.mock("axios", () => ({
  data: { response: { docs: [] } },
}));

describe("Test ArticleList", () => {
  it("Snapshot", () => {
    const { container } = render(
      <Provider store={store}>
        <ArticleList />
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });
});
