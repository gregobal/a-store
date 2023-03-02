import {Divider} from "@alfalab/core-components/divider";
import {IconButton} from "@alfalab/core-components/icon-button";
import {ModalMobile} from "@alfalab/core-components/modal/Component.mobile";
import {useCallback, useEffect} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {ReactComponent as CrossIcon} from "../../assets/icons/back.svg";
import {ORDER_HASH} from "../../constants/routes";
import {useAppSelector} from "../../hooks/useAppSelector";
import {selectCartTotalCount} from "../../store/cart";
import {selectOrder} from "../../store/order";
import {OrderDetails} from "./details";
import {OrderError} from "./error";

import styles from './index.module.css';
import {OrderLoading} from "./loading";
import {OrderSuccess} from "./success";

export const Order = () => {
    const {hash} = useLocation();
    const navigate = useNavigate();

    const order = useAppSelector(selectOrder);
    const cartTotal = useAppSelector(selectCartTotalCount);

    const isIdleStatus = order.status === "idle";
    const isNotModalView = isIdleStatus && cartTotal === 0;
    const isCanBackFromModal = isIdleStatus;

    const goBack = useCallback(() => {
        if (isCanBackFromModal) {
            navigate(-1);
        }
    }, [navigate, isCanBackFromModal]);

    const handleClose = () => {
        goBack();
    }

    useEffect(() => {
        if (isNotModalView && hash === ORDER_HASH) {
            goBack();
        }
    }, [isNotModalView, hash, goBack]);

    if (isNotModalView) {
        return null;
    }

    return (
        <ModalMobile
            open={hash === ORDER_HASH}
            disableBackdropClick={true}
            hasCloser={isCanBackFromModal}
            onClose={handleClose}
        >
            <ModalMobile.Header
                sticky={true}
                trim={true}
                align="center"
                title="Ваш заказ"
                leftAddons={isCanBackFromModal && <IconButton icon={CrossIcon} onClick={handleClose}/>}
            />
            <Divider/>
            <ModalMobile.Content className={styles.container}>
                {isIdleStatus && <OrderDetails/>}
                {order.status === "loading" && <OrderLoading/>}
                {order.status === "failed" && <OrderError error={order.error as string}/>}
                {order.status === "succeeded" && <OrderSuccess result={order.result as string}/>}
            </ModalMobile.Content>
        </ModalMobile>
    );
}
