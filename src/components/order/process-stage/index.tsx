import {Badge} from "@alfalab/core-components/badge";
import {Button} from "@alfalab/core-components/button";
import {Plate} from "@alfalab/core-components/plate";
import {ReactElement, ReactNode, useEffect} from "react";
import {useAppDispatch} from "../../../hooks/useAppDispatch";
import {cartActions} from "../../../store/cart";
import {orderActions} from "../../../store/order";

type Props = {
    clearCart?: boolean,
    title: string,
    view: "attention" | "positive" | "negative",
    icon: ReactElement | number,
    children: ReactNode
}

export const OrderProcessStage = ({clearCart = false, title, view, icon, children}: Props) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (clearCart) {
            dispatch(cartActions.init());
        }
    }, [dispatch, clearCart]);

    const handleClick = () => {
        dispatch(orderActions.init());
    }

    return (
        <Plate
            view={view}
            title={title}
            leftAddons={<Badge view="icon" iconColor={view} content={icon}/>}
            buttons={[
                <Button onClick={handleClick}>Продолжить</Button>
            ]}
        >
            {children}
        </Plate>
    );
}
