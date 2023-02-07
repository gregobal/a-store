import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {BrowserRouter} from "react-router-dom";
import {contactUs, madeInAlfa, ownDesign} from "../../constants/routes";
import {SideMenu} from "./index";

const hrefs = ["", madeInAlfa.path, ownDesign.path, contactUs.path];

const onSetOpen = jest.fn();

const element = (
    <BrowserRouter>
        <SideMenu open={true} onSetOpen={onSetOpen}/>
    </BrowserRouter>
)

describe("Side Menu", () => {
    it("onSetOpen called with argument 'false'", () => {
        render(element);

        userEvent.click(screen.getAllByRole("button")[0]);

        expect(onSetOpen).toBeCalled();
        expect(onSetOpen).lastCalledWith(false);
    });

    it("should contain links to pages", () => {
        render(element);

        screen.getAllByRole("link").forEach((link, idx) => {
            expect(link).toBeInTheDocument();
            expect(link).toHaveAttribute("href", `/${hrefs[idx]}`);
        })
    });
});
