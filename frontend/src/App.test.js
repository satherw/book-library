import {render, screen} from "@testing-library/react";
import App from "./App";

describe("renders book library application", function () {
    beforeEach(() => {
        fetch.resetMocks();
    });

    test("renders learn react link", async () => {
        fetch.mockResponseOnce(JSON.stringify([{name: "test-book-1", author: "test-author-1", "tag": "test-tag-1"}]));

        render(<App/>);
        expect(await screen.findByText("Book Library")).toBeInTheDocument();
    });

});

