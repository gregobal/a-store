import {Amount} from "@alfalab/core-components/amount";
import {Gap} from "@alfalab/core-components/gap";
import {GenericWrapper} from "@alfalab/core-components/generic-wrapper";
import {Grid} from "@alfalab/core-components/grid";
import {Space} from "@alfalab/core-components/space";
import {Typography} from "@alfalab/core-components/typography";
import {useState} from "react";
import {deliveryCost, withoutDelivery} from "../../../constants/order";
import {useAppSelector} from "../../../hooks/useAppSelector";
import {selectCartTotalPrice} from "../../../store/cart";
import {CartList} from "../../cart/list";
import {OrderDetailsForm} from "./details-form";

import styles from './index.module.css';

const colWidth = {mobile: 12, tablet: {s: 10, m: 8}, desktop: 6};

export const OrderDetails = () => {
    const [delivery, setDelivery] = useState(withoutDelivery);
    const cartPrice = useAppSelector(selectCartTotalPrice);

    const totalPrice = cartPrice + deliveryCost[delivery];

    return (
        <Grid.Row gutter={24} justify="center" className={styles.container}>
            <Grid.Col width={colWidth}>
                <OrderDetailsForm deliveryType={delivery} onSetDeliveryType={setDelivery}/>
            </Grid.Col>
            <Grid.Col width={colWidth} order={{tablet: "first", mobile: "first"}}>
                <Space size="s" direction="vertical" fullWidth={true}>
                    <Typography.Text view="primary-medium" weight="medium">
                        Выбрано
                    </Typography.Text>
                    <div className={styles.cartContainer}>
                        <CartList/>
                    </div>
                    <GenericWrapper column={true} alignItems="end" grow={true}>
                        <Typography.Text view="primary-medium" weight="medium">
                            на сумму:&nbsp;
                            <Amount value={cartPrice} minority={1} currency="RUB" bold="full"/>
                        </Typography.Text>
                        <Gap size="l"/>
                        <Typography.Text view="primary-medium">
                            {delivery}:&nbsp;
                            <Amount value={deliveryCost[delivery]} minority={1} currency="RUB"
                                    bold="full"/>
                        </Typography.Text>
                        <Typography.Text view="primary-large" weight="bold">
                            Итоговая сумма:&nbsp;
                            <Amount value={totalPrice} minority={1} currency="RUB" bold="full"/>
                        </Typography.Text>
                        <Gap size="l"/>
                    </GenericWrapper>
                </Space>
            </Grid.Col>
        </Grid.Row>
    );
}
