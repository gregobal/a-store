import {IconButton} from "@alfalab/core-components/icon-button";
import {SuperEllipse} from "@alfalab/core-components/icon-view/components";
import {Input} from "@alfalab/core-components/input";
import {Link} from "@alfalab/core-components/link";
import {PureCell} from "@alfalab/core-components/pure-cell";
import {Space} from "@alfalab/core-components/space";
import {Typography} from "@alfalab/core-components/typography";
import React, {ChangeEvent} from "react";
import {Link as RouterLink} from "react-router-dom";
import {ReactComponent as CrossIcon} from "../../../../assets/icons/cross.svg";
import {ReactComponent as MinusIcon} from "../../../../assets/icons/minus.svg";
import {ReactComponent as PlusIcon} from "../../../../assets/icons/plus.svg";
import {MAX_CART_ITEM_QUANTITY, positionOptionsLabels} from "../../../../constants/cart";
import {product as productRoute} from "../../../../constants/routes";
import {useAppDispatch} from "../../../../hooks/useAppDispatch";
import {cartActions} from "../../../../store/cart-slice";
import {CartItem, CartItemOptionKey} from "../../../../types/cart";

import styles from './index.module.css';

type Props = {
    item: CartItem
};

export const CartListItem = ({item: {id, quantity, productId, title, preview, price, ...options}}: Props) => {
    const dispatch = useAppDispatch();

    const totalPrice = price * quantity;

    const handleIncrementClick = () => {
        dispatch(cartActions.increment(id));
    }

    const handleDecrementClick = () => {
        dispatch(cartActions.decrement(id));
    }

    const handleRemoveClick = () => {
        dispatch(cartActions.remove(id));
    }

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const quantity = parseInt(event.target.value);

        if (!Number.isNaN(quantity)) {
            dispatch(cartActions.changeQuantity({id, quantity}));
        }
    }

    return (
        <PureCell direction="horizontal" className={styles.container}>
            <PureCell.Graphics verticalAlign='center'>
                <SuperEllipse imageUrl={preview} size={64}/>
            </PureCell.Graphics>
            <PureCell.Content>
                <PureCell.Main>
                    <Space size={4} direction="vertical" align="center" fullWidth={true}>
                        <Typography.Text view="primary-large" weight="medium">
                            <Link
                                href={`/${productRoute.path}/${productId}`}
                                Component={RouterLink}
                                underline={false}
                            >
                                {title}
                            </Link>
                        </Typography.Text>
                        {Object.entries(options).map(([key, value]) => (
                            <Typography.Text key={key} view="secondary-medium">
                                {positionOptionsLabels[key as CartItemOptionKey]}: {value}
                            </Typography.Text>
                        ))}
                    </Space>
                </PureCell.Main>
            </PureCell.Content>
            <PureCell.Content>
                <PureCell.Main>
                    <Space size={2} direction="horizontal" align="center" className={styles.space}>
                        <IconButton
                            size="xs"
                            view="tertiary"
                            icon={MinusIcon}
                            disabled={quantity <= 1}
                            onClick={handleDecrementClick}
                        />
                        <Input
                            inputClassName={styles.input}
                            type="number"
                            min={0}
                            max={MAX_CART_ITEM_QUANTITY}
                            value={quantity.toString(10)}
                            onChange={handleInputChange}
                        />
                        <IconButton
                            size="xs"
                            view="tertiary"
                            icon={PlusIcon}
                            disabled={quantity >= MAX_CART_ITEM_QUANTITY}
                            onClick={handleIncrementClick}
                        />
                        <PureCell.Amount
                            className={styles.total}
                            value={totalPrice}
                            currency='RUR'
                            minority={1}
                            textView="primary-small"
                            weight="bold"
                            rightAddons={
                                <IconButton
                                    size="xs"
                                    view="tertiary"
                                    icon={CrossIcon}
                                    onClick={handleRemoveClick}
                                />
                            }
                        />
                    </Space>
                </PureCell.Main>
            </PureCell.Content>
        </PureCell>
    );
}
