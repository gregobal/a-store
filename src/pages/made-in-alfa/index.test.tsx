import {render} from "@testing-library/react";
import {BrowserRouter} from "react-router-dom";
import {MadeInAlfa} from "./index";

describe("Main Page", () => {
    it("snapshot", () => {
        const view = render(
            <BrowserRouter>
                <MadeInAlfa />
            </BrowserRouter>
        );

        expect(view).toMatchSnapshot();
    });
});
