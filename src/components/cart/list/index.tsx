import {Space} from "@alfalab/core-components/space";
import {useAppSelector} from "../../../hooks/useAppSelector";
import {selectCart} from "../../../store/cart-slice";
import {CartListItem} from "./item";

export const CartList = () => {
    const cart = useAppSelector(selectCart);

    return (
        <Space size="l" direction="vertical" fullWidth={true}>
            {cart.map((item, idx) => (
                <CartListItem key={idx} item={item}/>
            ))}
        </Space>
    );
}
