import {render, screen} from "@testing-library/react";
import BookIcon from "./BookIcon";

describe("renders book icon", function () {

    test("displays list containing a single book", async () => {
        const book =
            {
                name: "To Kill a Mockingbird",
                author: "Harper Lee",
                tag: "Classic",
            };

        render(<BookIcon book={book}/>);

        expect(screen.getByText("To Kill a Mockingbird")).toBeInTheDocument();
        expect(screen.getByText("Harper Lee")).toBeInTheDocument();
        expect(screen.getByText("Classic")).toBeInTheDocument();
    });
});

