import {render, screen} from "@testing-library/react";
import {MemoryRouter} from "react-router-dom";
import {ProductDescription} from "./index";

describe("Product Description", () => {
    it("should contain element with text for each sentence in product description", () => {
        const desc = "Предложение один.  Еще, одно предложение. Третье по Счету - после второго.\nИ на след. строке"

        render(<MemoryRouter>
            <ProductDescription description={desc}/>
        </MemoryRouter>);

        expect(screen.getByText("Предложение один.")).toBeInTheDocument();
        expect(screen.getByText("Еще, одно предложение.")).toBeInTheDocument();
        expect(screen.getByText("Третье по Счету - после второго.")).toBeInTheDocument();
        expect(screen.getByText("И на след. строке")).toBeInTheDocument();

        expect(screen.queryByText("Такого нет.")).not.toBeInTheDocument();
    });
});
