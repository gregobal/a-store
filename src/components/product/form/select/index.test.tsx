import {render, screen} from "@testing-library/react";
import {MemoryRouter} from "react-router-dom";
import {ProductFormSelect} from "./index";

const element = (<MemoryRouter>
    <ProductFormSelect
        selected="one"
        label="test"
        values={["one", "two", "three"]}
        onSetValue={jest.fn}/>
</MemoryRouter>);

describe("Product Form Select", () => {
    it("should contain combobox", () => {
        render(element);

        const actual = screen.getByRole("combobox");

        expect(actual).toBeInTheDocument();
    });
});
