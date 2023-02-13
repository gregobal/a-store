import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {MemoryRouter, Route, Routes} from "react-router-dom";
import {Promo} from "./index";

import styles from './index.module.css';

const title = "title";
const href = "href";
const position = "right";
const root = "root";

const element = (
    <MemoryRouter>
        <Routes>
            <Route path="/" element={<div data-testid={root}/>}/>
            <Route path={`/${href}`} element={<div data-testid={href}/>}/>
        </Routes>
        <Promo title={title} href={href} position={position}/>
    </MemoryRouter>
)

describe("Promo", () => {
    it("should contain link with href from props and click should route to linked page", () => {
        render(element);

        const actual = screen.getByRole("link");

        expect(actual).toBeInTheDocument();
        expect(actual).toHaveAttribute("href", `/${href}`);

        userEvent.click(actual);
        expect(screen.getByTestId(href)).toBeInTheDocument();
        expect(screen.queryByTestId(root)).not.toBeInTheDocument();
    });

    it ("should contain title with tag 'h1'", () => {
        render(element);

        const actual = screen.getByText(title);

        expect(actual).toBeInTheDocument();
        expect(actual.tagName).toBe("H1");
    })

    it ("should contain className depending on position", () => {
        render(element);

        expect(screen.getByRole("link")).toHaveClass(styles.right);
    })
});
