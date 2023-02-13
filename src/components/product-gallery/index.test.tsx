import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {MemoryRouter} from "react-router-dom";
import {ProductGallery} from "./index";

const images = ["image_1", "image_2", "image_3"];
const alt = "title"

const element = (
    <MemoryRouter>
        <ProductGallery images={images} alt={alt}/>
    </MemoryRouter>
)

describe("Product Gallery", () => {
    it("should contain image with 'alt'", () => {
        render(element);

        const actual = screen.getByRole("img");

        expect(actual).toBeInTheDocument();
        expect(actual).toHaveAttribute("src", images[0]);
        expect(actual).toHaveAttribute("alt", alt);
    });

    it("should contain buttons which uses image for background", () => {
        render(element);

        const actual = screen.getAllByRole("button");

        expect(actual.length).toEqual(images.length);
        actual.forEach((button, idx) => {
            expect(button).toBeInTheDocument();
            expect(button).toHaveStyle({backgroundImage: `url("${images[idx]}")`})
        })
    });

    it("button click should set chosen image", () => {
        render(element);

        const image = screen.getByRole("img");
        const buttons = screen.getAllByRole("button");

        buttons.forEach((button, idx) => {
            userEvent.click(button);
            expect(image).toHaveAttribute("src", images[idx]);
        })
    });
});
