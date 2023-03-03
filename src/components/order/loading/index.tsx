import {Badge} from "@alfalab/core-components/badge";
import {Plate} from "@alfalab/core-components/plate";
import {Spinner} from "@alfalab/core-components/spinner";
import {ReactComponent as AlertIcon} from "../../../assets/icons/alert.svg";

export const OrderLoading = () => {
    return (
        <Plate
            view="attention"
            title="Заказ в обработке"
            leftAddons={<Badge view="icon" iconColor="attention" content={<AlertIcon/>}/>}
        >
            <Spinner size="m" visible={true}/>
        </Plate>
    );
}
