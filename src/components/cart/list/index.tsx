import {Space} from "@alfalab/core-components/space";
import {useAppSelector} from "../../../hooks/useAppSelector";
import {selectCart} from "../../../store/cart";
import {CartListItem} from "./item";

export const CartList = () => {
    const cart = useAppSelector(selectCart);

    return (
        <Space size="m" direction="vertical" fullWidth={true}>
            {cart.map((item) => (
                <CartListItem key={item.id} item={item}/>
            ))}
        </Space>
    );
}
