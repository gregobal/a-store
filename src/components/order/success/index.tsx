import {Badge} from "@alfalab/core-components/badge";
import {Button} from "@alfalab/core-components/button";
import {Plate} from "@alfalab/core-components/plate";
import {useEffect} from "react";
import {ReactComponent as CheckmarkIcon} from "../../../assets/icons/checkmark.svg";
import {useAppDispatch} from "../../../hooks/useAppDispatch";
import {cartActions} from "../../../store/cart";
import {orderActions} from "../../../store/order";

type Props = {
    result: string
}

export const OrderSuccess = ({result}: Props) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(cartActions.init());
    }, [dispatch]);

    const handleClick = () => {
        dispatch(orderActions.init());
    }

    const button = (<Button onClick={handleClick}>Вернуться в магазин</Button>)

    return (
        <Plate
            view="positive"
            title={result}
            leftAddons={<Badge view="icon" iconColor="positive" content={<CheckmarkIcon/>}/>}
            buttons={[button]}
        />
    );
}
