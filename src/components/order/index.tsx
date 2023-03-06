import {Divider} from "@alfalab/core-components/divider";
import {IconButton} from "@alfalab/core-components/icon-button";
import {ModalMobile} from "@alfalab/core-components/modal/Component.mobile";
import {Spinner} from "@alfalab/core-components/spinner";
import {useCallback, useEffect} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {ReactComponent as AlertIcon} from "../../assets/icons/alert.svg";
import {ReactComponent as CrossIcon} from "../../assets/icons/back.svg";
import {ReactComponent as CheckmarkIcon} from "../../assets/icons/checkmark.svg";
import {ORDER_HASH} from "../../constants/routes";
import {useAppSelector} from "../../hooks/useAppSelector";
import {selectCartTotalCount} from "../../store/cart";
import {selectOrder} from "../../store/order";
import {OrderDetails} from "./details";

import styles from './index.module.css';
import {OrderProcessStage} from "./process-stage";

export const Order = () => {
    const {hash} = useLocation();
    const navigate = useNavigate();

    const order = useAppSelector(selectOrder);
    const cartTotal = useAppSelector(selectCartTotalCount);

    const isIdleStatus = order.status === "idle";
    const isNotModalView = isIdleStatus && cartTotal === 0;

    const goBack = useCallback(() => {
        if (isIdleStatus) {
            navigate(-1);
        }
    }, [navigate, isIdleStatus]);

    const handleClose = () => {
        goBack();
    }

    useEffect(() => {
        if (isNotModalView && hash === ORDER_HASH) {
            goBack();
        }
    }, [isNotModalView, hash, goBack]);

    return (
        <ModalMobile
            open={hash === ORDER_HASH}
            disableBackdropClick={true}
            hasCloser={isIdleStatus}
            onClose={handleClose}
        >
            <ModalMobile.Header
                sticky={true}
                trim={true}
                align="center"
                title="Ваш заказ"
                leftAddons={isIdleStatus && <IconButton icon={CrossIcon} onClick={handleClose}/>}
            />
            <Divider/>
            <ModalMobile.Content className={styles.container}>
                {isIdleStatus && <OrderDetails/>}
                {order.status === "loading" &&
                    <OrderProcessStage
                        view="attention"
                        title="Заказ в обработке"
                        icon={<AlertIcon/>}
                    >
                        <Spinner size="m" visible={true}/>
                    </OrderProcessStage>
                }
                {order.status === "failed" &&
                    <OrderProcessStage
                        view="negative"
                        title="Ошибка при размещении заказа"
                        icon={<AlertIcon/>}
                    >
                        {order.error}
                    </OrderProcessStage>
                }
                {order.status === "succeeded" &&
                    <OrderProcessStage
                        clearCart={true}
                        view="positive"
                        title="Спасибо за ваш заказ!"
                        icon={<CheckmarkIcon/>}
                    >
                        {order.result}
                    </OrderProcessStage>
                }
            </ModalMobile.Content>
        </ModalMobile>
    );
}
