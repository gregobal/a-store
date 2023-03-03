import {Badge} from "@alfalab/core-components/badge";
import {Button} from "@alfalab/core-components/button";
import {Plate} from "@alfalab/core-components/plate";
import {ReactComponent as AlertIcon} from "../../../assets/icons/alert.svg";
import {useAppDispatch} from "../../../hooks/useAppDispatch";
import {orderActions} from "../../../store/order";

type Props = {
    error: string
}

export const OrderError = ({error}: Props) => {
    const dispatch = useAppDispatch();

    const handleClick = () => {
        dispatch(orderActions.init());
    }

    const button = (<Button onClick={handleClick}>Вернуться к заказу</Button>)

    return (
        <Plate
            view="negative"
            title="Ошибка при размещении заказа"
            leftAddons={<Badge view="icon" iconColor="negative" content={<AlertIcon/>}/>}
            buttons={[button]}
        >
            {error}
        </Plate>
    );
}
