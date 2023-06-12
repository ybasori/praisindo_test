import { render } from "@testing-library/react";
import ArticleItem from "./ArticleItem";

describe("Test ArticleItem", () => {
  it("Snapshot", () => {
    const { container } = render(
      <ArticleItem
        title={"Title"}
        author={"By Author"}
        publishDate={"2023-06-12T09:01:05+0000"}
        headline={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
      />
    );
    expect(container).toMatchSnapshot();
  });
});
