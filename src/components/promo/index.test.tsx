import {render, screen} from "@testing-library/react";
import {BrowserRouter} from "react-router-dom";
import {Promo} from "./index";

import styles from './index.module.css';

const title = "title";
const href = "href";
const position = "right";

const element = (
    <BrowserRouter>
        <Promo title={title} href={href} position={position}/>
    </BrowserRouter>
)

describe("Promo", () => {
    it("should contain link with href from props", () => {
        render(element);

        const expected = screen.getByRole("link");

        expect(expected).toBeInTheDocument();
        expect(expected).toHaveAttribute("href", `/${href}`);
    });

    it ("should contain title with tag 'h1'", () => {
        render(element);

        const expected = screen.getByText(title);

        expect(expected).toBeInTheDocument();
        expect(expected.tagName).toBe("H1");
    })

    it ("should contain className depending on position", () => {
        render(element);

        expect(screen.getByRole("link")).toHaveClass(styles.right);
    })
});
