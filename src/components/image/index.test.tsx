import {render, screen} from "@testing-library/react";
import {MemoryRouter} from "react-router-dom";
import {Image} from "./index";

describe("Image", () => {
    it("should contain img with based attributes", () => {
        render(<MemoryRouter>
            <Image src="src" alt="alt" width={100}/>
        </MemoryRouter>);

        const actual = screen.getByRole("img");

        expect(actual).toBeInTheDocument();
        expect(actual).toHaveAttribute("src", "src");
        expect(actual).toHaveAttribute("alt", "alt");
        expect(actual).toHaveAttribute("width", "100");
    });
});
