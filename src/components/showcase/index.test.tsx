import {render, screen} from "@testing-library/react";
import {BrowserRouter} from "react-router-dom";
import {Showcase} from "./index";

const products = [
    {id: 1, preview: "preview", title: "one", price: 100, availability: true},
    {id: 2, preview: "preview", title: "two", price: 200, availability: false}
];

describe("Showcase", () => {
    it("should contain article with products", () => {
        render(
            <BrowserRouter>
                <Showcase products={products}/>
            </BrowserRouter>
        );

        expect(screen.getByRole("article")).toBeInTheDocument();
        expect(screen.getAllByRole("link")).toHaveLength(2);
    });
});
