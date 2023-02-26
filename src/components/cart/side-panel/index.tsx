import {Amount} from "@alfalab/core-components/amount";
import {Button} from "@alfalab/core-components/button";
import {Divider} from "@alfalab/core-components/divider";
import {SidePanelResponsive} from "@alfalab/core-components/side-panel";
import {Space} from "@alfalab/core-components/space";
import {Typography} from "@alfalab/core-components/typography";
import {Dispatch, SetStateAction, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {ORDER_HASH} from "../../../constants/routes";
import {useAppSelector} from "../../../hooks/useAppSelector";
import {selectCartTotalPrice} from "../../../store/cart-slice";
import {CartList} from "../list";

import styles from './index.module.css';

type Props = {
    open: boolean,
    onSetOpen: Dispatch<SetStateAction<boolean>>
}

export const CartSidePanel = ({open, onSetOpen}: Props) => {
    const navigate = useNavigate();
    const totalPrice = useAppSelector(selectCartTotalPrice);
    const handleModalClose = () => {
        onSetOpen(false);
    }

    const handleClick = () => {
        onSetOpen(false);
        navigate(ORDER_HASH);
    }

    useEffect(() => {
        if (totalPrice === 0) {
            onSetOpen(false);
        }
    }, [totalPrice, onSetOpen])

    return (
        <SidePanelResponsive
            className={styles.container}
            disableBlockingScroll={true}
            disableRestoreFocus={true}
            open={open}
            onClose={handleModalClose}
        >
            <SidePanelResponsive.Header>
                Ваш заказ
            </SidePanelResponsive.Header>
            <Divider/>
            <SidePanelResponsive.Content className={styles.content}>
                <CartList/>
            </SidePanelResponsive.Content>
            <Divider/>
            <SidePanelResponsive.Footer layout="column">
                <Space align="end">
                    <Typography.Text view="primary-large" weight="bold">
                        Сумма:&nbsp;
                        <Amount value={totalPrice} minority={1} currency="RUB" bold="full"/>
                    </Typography.Text>
                </Space>
                <Button
                    view="primary"
                    block={true}
                    disabled={totalPrice === 0}
                    onClick={handleClick}
                >
                    Дальше
                </Button>
            </SidePanelResponsive.Footer>
        </SidePanelResponsive>
    );
}
