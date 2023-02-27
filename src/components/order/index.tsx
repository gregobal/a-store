import {Amount} from "@alfalab/core-components/amount";
import {Divider} from "@alfalab/core-components/divider";
import {Gap} from "@alfalab/core-components/gap";
import {GenericWrapper} from "@alfalab/core-components/generic-wrapper";
import {Grid} from "@alfalab/core-components/grid";
import {IconButton} from "@alfalab/core-components/icon-button";
import {ModalMobile} from "@alfalab/core-components/modal/Component.mobile";
import {Space} from "@alfalab/core-components/space";
import {Typography} from "@alfalab/core-components/typography";
import {useCallback, useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {ReactComponent as CrossIcon} from "../../assets/icons/back.svg";
import {deliveryOpts} from "../../constants/order";
import {ORDER_HASH} from "../../constants/routes";
import {useAppSelector} from "../../hooks/useAppSelector";
import {selectCartTotalPrice} from "../../store/cart-slice";
import {CartList} from "../cart/list";
import {OrderDetailsForm} from "./details-form";

import styles from './index.module.css';

const colWidth = {mobile: 12, tablet: {s: 9, m: 7}, desktop: {s: 5, m: 4, l: 3}};

export const Order = () => {
    const {hash} = useLocation();
    const navigate = useNavigate();

    const [delivery, setDelivery] = useState(deliveryOpts[2]);
    const cartPrice = useAppSelector(selectCartTotalPrice);

    const totalPrice = cartPrice + delivery.price;

    const goBack = useCallback(() => {
        navigate(-1);
    }, [navigate]);

    const handleClose = () => {
        goBack();
    }

    useEffect(() => {
        if (cartPrice === 0 && hash === ORDER_HASH) {
            goBack();
        }
    }, [cartPrice, hash, goBack])

    return (
        <ModalMobile
            open={hash === ORDER_HASH}
            disableBackdropClick={true}
            hasCloser={true}
            onClose={handleClose}
            className={styles.container}
        >
            <ModalMobile.Header
                sticky={true}
                trim={true}
                align="center"
                title="Ваш заказ"
                leftAddons={<IconButton icon={CrossIcon} onClick={handleClose}/>}
            />
            <Divider/>
            <ModalMobile.Content>
                <Grid.Row gutter={24} justify="center">
                    <Grid.Col width={colWidth} className={styles.column}>
                        <Space size="l" direction="vertical" fullWidth={true}>
                            <OrderDetailsForm delivery={delivery} onSetDelivery={setDelivery}/>
                        </Space>
                    </Grid.Col>
                    <Grid.Col width={colWidth} order={{mobile: "first", tablet: "first"}} className={styles.column}>
                        <Space size="l" direction="vertical" fullWidth={true}>
                            <Typography.Text view="primary-medium" weight="medium">
                                Выбрано
                            </Typography.Text>
                            <CartList/>
                            <GenericWrapper column={true} alignItems="end" grow={true}>
                                <Typography.Text view="primary-medium" weight="medium">
                                    на сумму:&nbsp;
                                    <Amount value={cartPrice} minority={1} currency="RUB" bold="full"/>
                                </Typography.Text>
                                <Gap size="l"/>
                                {delivery.value !== "none" && <Typography.Text view="primary-medium">
                                    {delivery.label}:&nbsp;
                                    <Amount value={delivery.price} minority={1} currency="RUB" bold="full"/>
                                </Typography.Text>}
                                <Typography.Text view="primary-large" weight="bold">
                                    Итоговая сумма:&nbsp;
                                    <Amount value={totalPrice} minority={1} currency="RUB" bold="full"/>
                                </Typography.Text>
                            </GenericWrapper>
                        </Space>
                    </Grid.Col>
                </Grid.Row>
            </ModalMobile.Content>
        </ModalMobile>
    );
}
