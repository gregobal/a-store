import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {BrowserRouter} from "react-router-dom";
import {Logo} from "./index";

const onClick = jest.fn();

const element = (
    <BrowserRouter>
        <Logo onClick={onClick}/>
    </BrowserRouter>
)

describe("Logo", () => {
    it("onClick called successfully", () => {
        render(element);

        userEvent.click(screen.getByRole("link"));

        expect(onClick).toBeCalled();
    });

    it("should contain link to root", () => {
        render(element);

        const actual = screen.getByRole("link");

        expect(actual).toBeInTheDocument();
        expect(actual).toHaveAttribute("href", '/');
    });
});
