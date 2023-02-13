import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {MemoryRouter, Route, Routes} from "react-router-dom";
import {contactUs, madeInAlfa, mainPage, ownDesign} from "../../constants/routes";
import {SideMenu} from "./index";

const routes = [mainPage, madeInAlfa, ownDesign, contactUs];

const onSetOpen = jest.fn();

const element = (
    <MemoryRouter>
        <Routes>
            {routes.map(({path, title}) => (
                <Route path={`/${path}`} element={<div data-testid={title}/>} key={path}/>
            ))}
        </Routes>
        <SideMenu open={true} onSetOpen={onSetOpen}/>
    </MemoryRouter>
)

describe("Side Menu", () => {
    it("onSetOpen called with argument 'false'", () => {
        render(element);

        userEvent.click(screen.getAllByRole("button")[0]);

        expect(onSetOpen).toHaveBeenCalledTimes(1);
        expect(onSetOpen).lastCalledWith(false);
    });

    it("should contain links to pages and click should route to linked page", () => {
        render(element);

        screen.getAllByRole("link").forEach((link, idx) => {
            expect(link).toBeInTheDocument();
            expect(link).toHaveAttribute("href", `/${routes[idx].path}`);

            userEvent.click(link);
            expect(screen.getByTestId(routes[idx].title)).toBeInTheDocument();

            if (idx === 0) return;
            expect(screen.queryByTestId(routes[idx - 1].title)).not.toBeInTheDocument();
        })
    });
});
