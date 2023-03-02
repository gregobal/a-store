import {Scrollbar} from "@alfalab/core-components/scrollbar";
import {Space} from "@alfalab/core-components/space";
import {useAppSelector} from "../../../hooks/useAppSelector";
import {selectCart} from "../../../store/cart";

import styles from './index.module.css';
import {CartListItem} from "./item";

export const CartList = () => {
    const cart = useAppSelector(selectCart);

    return (
        <Scrollbar className={styles.container}>
            <Space size="m" direction="vertical" fullWidth={true}>
                {cart.map((item) => (
                    <CartListItem key={item.id} item={item}/>
                ))}
            </Space>
        </Scrollbar>
    );
}
