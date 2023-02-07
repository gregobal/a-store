import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {BrowserRouter} from "react-router-dom";
import {Header} from "./index";

const handleMenuState = jest.fn();

const element = (
    <BrowserRouter>
        <Header handleMenuState={handleMenuState}/>
    </BrowserRouter>
)

describe("Header", () => {
    it("handleMenuState called with argument 'true'", () => {
        render(element);

        userEvent.click(screen.getByRole("button"));

        expect(handleMenuState).toBeCalled();
        expect(handleMenuState).lastCalledWith(true);
    });
});
