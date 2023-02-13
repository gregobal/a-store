import {render} from "@testing-library/react";
import {MemoryRouter} from "react-router-dom";
import {MadeInAlfaPage} from "./index";

describe("Made In Alfa Page", () => {
    it("snapshot", () => {
        const view = render(
            <MemoryRouter>
                <MadeInAlfaPage />
            </MemoryRouter>
        );

        expect(view).toMatchSnapshot();
    });
});
