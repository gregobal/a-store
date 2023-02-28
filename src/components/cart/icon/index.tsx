import {Amount} from "@alfalab/core-components/amount";
import {Badge} from "@alfalab/core-components/badge";
import {Circle} from "@alfalab/core-components/icon-view/components";
import {Tooltip} from "@alfalab/core-components/tooltip";
import {Typography} from "@alfalab/core-components/typography";
import {colorRedBrand, colorWhite} from '@alfalab/core-components/vars';
import {Dispatch, SetStateAction} from "react";
import {ReactComponent as ShoppingBagIcon} from "../../../assets/icons/shopping-bag.svg";
import {useAppSelector} from "../../../hooks/useAppSelector";
import {selectCartTotalCount, selectCartTotalPrice} from "../../../store/cart-slice";

import styles from './index.module.css';

type Props = {
    handleCartSidePanelState: Dispatch<SetStateAction<boolean>>
}

export const CartIcon = ({handleCartSidePanelState}: Props) => {
    const total = useAppSelector(selectCartTotalCount);
    const totalPrice = useAppSelector(selectCartTotalPrice);

    if (total === 0) {
        return null;
    }

    const handleSetCartSidePanelOpen = () => {
        handleCartSidePanelState(true);
    }

    const tooltip = (<Typography.Text view="primary-large" weight="medium">
        =&nbsp;
        <Amount value={totalPrice} minority={1} currency="RUB" bold="full"/>
    </Typography.Text>);

    return (
        <button onClick={handleSetCartSidePanelOpen} className={styles.container}>
            <Tooltip
                popoverClassName={styles.shadowNone}
                contentClassName={styles.shadowNone}
                onCloseDelay={50}
                position='left'
                view='hint'
                content={tooltip}
            >
                <Circle
                    size={80}
                    backgroundColor={colorRedBrand}
                    bottomAddons={
                        <Badge view="count" height={24} content={total}/>
                    }
                >
                    <ShoppingBagIcon color={colorWhite}/>
                </Circle>
            </Tooltip>
        </button>
    );
}
