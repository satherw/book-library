import { render } from "@testing-library/react";
import CreateBook from "./CreateBook";

describe("renders create book component", function () {
  test("renders the create book form", async () => {
    render(<CreateBook />);
  });
});
