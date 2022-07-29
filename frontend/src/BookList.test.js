import {render, screen} from "@testing-library/react";
import BookList from "./BookList";

describe("renders book list", function () {

    test("displays list of two books", async () => {
        const books = [
            {
                name: "To Kill a Mockingbird",
                author: "Harper Lee",
                tag: "Classic",
            },
            {
                name: "The Grapes of Wrath",
                author: "John Steinbeck",
                tag: "Literature",
            }
        ];

        render(<BookList books={books}/>);

        expect(screen.getByText("To Kill a Mockingbird")).toBeInTheDocument();
        expect(screen.getByText("The Grapes of Wrath")).toBeInTheDocument();
    });

/*    test("displays no books found when empty list", () => {
        render(<BookList books={[]}/>);

        expect(screen.getByText("No books found :(")).toBeInTheDocument();
    });*/

});

