import {Amount} from "@alfalab/core-components/amount";
import {Button} from "@alfalab/core-components/button";
import {Divider} from "@alfalab/core-components/divider";
import {SidePanelResponsive} from "@alfalab/core-components/side-panel";
import {SidePanelMobile} from "@alfalab/core-components/side-panel/Component.mobile";
import {Space} from "@alfalab/core-components/space";
import {Typography} from "@alfalab/core-components/typography";
import {Dispatch, SetStateAction, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {ORDER_HASH} from "../../../constants/routes";
import {useAppSelector} from "../../../hooks/useAppSelector";
import {selectCartTotalCount, selectCartTotalPrice} from "../../../store/cart";
import {CartList} from "../list";

import styles from './index.module.css';

type Props = {
    open: boolean,
    onSetOpen: Dispatch<SetStateAction<boolean>>
}

export const CartSidePanel = ({open, onSetOpen}: Props) => {
    const navigate = useNavigate();
    const totalPrice = useAppSelector(selectCartTotalPrice);
    const totalCount = useAppSelector(selectCartTotalCount);

    const handleModalClose = () => {
        onSetOpen(false);
    }

    const handleOpenOrderClick = () => {
        onSetOpen(false);
        navigate(ORDER_HASH);
    }

    useEffect(() => {
        if (totalCount === 0) {
            onSetOpen(false);
        }
    }, [totalCount, onSetOpen])

    return (
        <SidePanelResponsive
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
            <SidePanelMobile.Footer layout="column">
                <Space align="end">
                    <Typography.Text view="primary-large" weight="bold">
                        Сумма:&nbsp;
                        <Amount value={totalPrice} minority={1} currency="RUB" bold="full"/>
                    </Typography.Text>
                </Space>
                <Button
                    view="primary"
                    block={true}
                    onClick={handleOpenOrderClick}
                >
                    Дальше
                </Button>
            </SidePanelMobile.Footer>
        </SidePanelResponsive>
    );
}
