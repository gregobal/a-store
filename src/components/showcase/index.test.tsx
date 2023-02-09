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
});
