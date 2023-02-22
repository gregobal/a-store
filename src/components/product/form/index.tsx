import {Button} from "@alfalab/core-components/button";
import {Grid} from "@alfalab/core-components/grid";
import {BaseSelectChangePayload} from "@alfalab/core-components/select";
import {SelectResponsive} from "@alfalab/core-components/select/Component.responsive";
import {OptionShape} from "@alfalab/core-components/select/typings";
import {Space} from "@alfalab/core-components/space";
import {useMemo, useState} from "react";
import {Product} from "../../../types/product";

type Props = {
    product: Product
}

const optionKeys = ["colors", "sizes", "models", "stickerNumbers"] as const;
type OptionKey = typeof optionKeys[number];

type Options = Record<OptionKey, OptionShape[]>;

type Selected = Record<OptionKey, OptionShape>;

const labels: Record<OptionKey, string> = {
    colors: "Цвет",
    sizes: "Размер",
    models: "Модель",
    stickerNumbers: "Номер стикера"
}

export const ProductForm = ({product}: Props) => {
    const selectsOpts = useMemo(() => {
        return optionKeys.reduce((acc, key) => {
            const arr = product[key];
            if (arr && arr.length > 0) {
                return {
                    ...acc,
                    [key]: arr.map((v) => ({key: v, content: v}))
                };
            }
            return acc;
        }, {} as Options)
    }, [product]);

    const [selected, setSelected] = useState<Selected>(
        Object.entries(selectsOpts).reduce((acc, [key, value]) => ({
            ...acc,
            [key]: value[0]
        }), {} as Selected)
    );

    const handleChange = (key: OptionKey, {selected}: BaseSelectChangePayload) => {
        if (selected) {
            setSelected(prev => ({
                ...prev,
                [key]: selected
            }))
        }
    }

    const handleClick = () => {
    }

    return (
        <Grid.Row tag="section" gutter={0} justify="left">
            <Grid.Col tag="div" width={{mobile: 7, tablet: 5, desktop: 5}}>
                <Space size="m" fullWidth={true}>
                    {Object.entries(selectsOpts).map(([key, value]) => {
                        const optKey = key as OptionKey;
                        return (<SelectResponsive
                            key={key}
                            size="s"
                            block={true}
                            closeOnSelect={true}
                            label={labels[optKey]}
                            options={value}
                            selected={selected[optKey]}
                            onChange={(payload) => handleChange(optKey, payload)}
                        />);
                    })}
                    <Button view="primary" block={true} onClick={() => handleClick()}>
                        В корзину
                    </Button>
                </Space>
            </Grid.Col>
        </Grid.Row>
    );
}
