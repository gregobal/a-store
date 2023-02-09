import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {MemoryRouter, Route, Routes} from "react-router-dom";
import {Logo} from "./index";

const onClick = jest.fn();

const root = "root";
const somewhere = "somewhere";

const element = (
    <MemoryRouter initialEntries={[`/${somewhere}`]}>
        <Routes>
            <Route path="/" element={<div data-testid={root}/>}/>
            <Route path={`/${somewhere}`} element={
                <Logo onClick={onClick}/>
            }/>
        </Routes>
    </MemoryRouter>
)

describe("Logo", () => {
    it("click should route by link to '/' and call handler one times", () => {
        render(element);

        const actual = screen.getByRole("link");

        expect(actual).toBeInTheDocument();
        expect(actual).toHaveAttribute("href", '/');

        userEvent.click(actual);

        expect(onClick).toHaveBeenCalledTimes(1);
        expect(screen.getByTestId(root)).toBeInTheDocument();
        expect(screen.queryByTestId(somewhere)).not.toBeInTheDocument();
    });
});
