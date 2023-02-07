import {render, screen} from "@testing-library/react";
import {BrowserRouter} from "react-router-dom";
import {ShowcaseItem} from "./index";

const product = {id: 1, preview: "preview", title: "one", price: 1000, availability: true};

const element = (
    <BrowserRouter>
        <ShowcaseItem product={product}/>
    </BrowserRouter>
)

describe("Showcase Item", () => {
    it("should contain link with product id", () => {
        render(element);

        const expected = screen.getByRole("link");

        expect(expected).toBeInTheDocument();
        expect(expected).toHaveAttribute("href", `/${product.id}`);
    });

    it ("should contain products image with alt text", () => {
        render(element);

        const expected = screen.getByRole("img");

        expect(expected).toBeInTheDocument();
        expect(expected).toHaveAttribute("alt", product.title);
    })

    it ("should contain title with tag 'h2'", () => {
        render(element);

        const expected = screen.getByText(product.title);

        expect(expected).toBeInTheDocument();
        expect(expected.tagName).toBe("H2");
    })

    it ("should contain text with formatted product price", () => {
        render(element);

        expect(screen.getByText("1 000")).toBeInTheDocument();
    })
});
