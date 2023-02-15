import {render, screen} from "@testing-library/react";
import {MemoryRouter} from "react-router-dom";
import {Showcase} from "./index";

const products = [
    {id: 1, preview: "preview", title: "one", price: 100, availability: true},
    {id: 2, preview: "preview", title: "two", price: 200, availability: false}
];

describe("Showcase", () => {
    it("should contain article with products", () => {
        render(
            <MemoryRouter>
                <Showcase products={products}/>
            </MemoryRouter>
        );

        expect(screen.getByRole("article")).toBeInTheDocument();
        expect(screen.getAllByRole("link")).toHaveLength(2);
    });

    it("should contain title if present", () => {
        render(
            <MemoryRouter>
                <Showcase products={products} title={"title"}/>
            </MemoryRouter>
        );

        const actual = screen.getByText("title");

        expect(actual).toBeInTheDocument();
        expect(actual.tagName).toBe("H1");
    });

    it("should contain description if present", () => {
        render(
            <MemoryRouter>
                <Showcase products={products} description={"description"}/>
            </MemoryRouter>
        );

        const actual = screen.getByText("description");
        expect(actual).toBeInTheDocument();
        expect(actual.tagName).toBe("SPAN");
    });
});
