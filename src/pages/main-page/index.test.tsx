import {render} from "@testing-library/react";
import {BrowserRouter} from "react-router-dom";
import {MainPage} from "./index";

describe("Main Page", () => {
    it("snapshot", () => {
        const view = render(
            <BrowserRouter>
                <MainPage />
            </BrowserRouter>
        );

        expect(view).toMatchSnapshot();
    });
});
