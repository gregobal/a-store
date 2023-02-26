import {Button} from "@alfalab/core-components/button";
import {Grid} from "@alfalab/core-components/grid";
import {BaseSelectChangePayload} from "@alfalab/core-components/select";
import {SelectResponsive} from "@alfalab/core-components/select/Component.responsive";
import {OptionShape} from "@alfalab/core-components/select/typings";
import {Space} from "@alfalab/core-components/space";
import {useMemo, useState} from "react";
import {positionOptionsLabels} from "../../../constants/cart";
import {useAppDispatch} from "../../../hooks/useAppDispatch";
import {cartActions} from "../../../store/cart-slice";
import {CartItemOptionKey, cartItemOptionKeys, CartItemOptions} from "../../../types/cart";
import {Product} from "../../../types/product";

type Props = {
    product: Product
}

type SelectOptions = Record<CartItemOptionKey, OptionShape[]>;

export const ProductForm = ({product}: Props) => {
    const dispatch = useAppDispatch();

    const selectOptions = useMemo(() => {
        return cartItemOptionKeys.reduce((acc, cartOptionKey) => {
            const options = product[`${cartOptionKey}s`];
            if (options && options.length > 0) {
                return {
                    ...acc,
                    [cartOptionKey]: options.map((v) => {
                        if (typeof v === "number") {
                            v = v.toString(10);
                        }
                        return ({key: v, content: v})
                    })
                };
            }
            return acc;
        }, {} as SelectOptions)
    }, [product]);

    const [selected, setSelected] = useState<CartItemOptions>(
        Object.entries(selectOptions).reduce((acc, [optionKey, value]) => ({
            ...acc,
            [optionKey]: value[0].key
        }), {} as CartItemOptions)
    );

    const handleChange = (optionKey: CartItemOptionKey, {selected}: BaseSelectChangePayload) => {
        if (selected) {
            setSelected(prev => ({
                ...prev,
                [optionKey]: selected.key
            }))
        }
    }

    const handleClick = () => {
        dispatch(cartActions.add({
            product,
            options: selected
        }));
    }

    return (
        <Grid.Row tag="section" gutter={0} justify="left">
            <Grid.Col tag="div" width={{mobile: 7, tablet: 5, desktop: 5}}>
                <Space size="m" fullWidth={true}>
                    {Object.entries(selectOptions).map(([key, value]) => {
                        const optionKey = key as CartItemOptionKey;
                        return (<SelectResponsive
                            key={key}
                            size="s"
                            block={true}
                            closeOnSelect={true}
                            label={positionOptionsLabels[optionKey]}
                            options={value}
                            selected={selected[optionKey]}
                            onChange={(payload) => handleChange(optionKey, payload)}
                        />);
                    })}
                    <Button
                        view="primary"
                        block={true}
                        disabled={!product.availability}
                        onClick={() => handleClick()}
                    >
                        {product.availability ? "В корзину" : "Нет в наличии"}
                    </Button>
                </Space>
            </Grid.Col>
        </Grid.Row>
    );
}
