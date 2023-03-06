import {orderReducer, OrderStore} from "./slice";

const initialState: OrderStore = {
    status: 'idle',
    result: null,
    error: null
}

describe("cart slice", () => {
    test("should return the initial state", () => {
        const actualState = orderReducer(undefined, {type: undefined});
        expect(actualState).toEqual(initialState);
    });
});
