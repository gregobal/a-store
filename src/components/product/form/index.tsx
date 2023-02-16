import {Button} from "@alfalab/core-components/button";
import {Grid} from "@alfalab/core-components/grid";
import {Space} from "@alfalab/core-components/space";
import {useMemo, useState} from "react";
import {Product} from "../../../types/product";
import {ProductFormSelect} from "./select";

type Props = {
    product: Product
}

export const ProductForm = ({product}: Props) => {
    const {colors, sizes, models, stickerNumbers} = product;

    const stickers = useMemo(
        () => stickerNumbers?.map(n => n.toString(10)),
        [stickerNumbers]
    );

    const [color, setColor] = useState(colors && colors[0]);
    const [size, setSize] = useState(sizes && sizes[0]);
    const [model, setModel] = useState(models && models[0]);
    const [sticker, setSticker] =
        useState(stickers && stickers[0]);

    const handleClick = () => {
        console.log(color, size, model, sticker);
    }

    return (
        <Grid.Row tag="section" gutter={0} justify="left">
            <Grid.Col tag="div" width={{mobile: 7, tablet: 5, desktop: 5}}>
                <Space size="m" fullWidth={true}>
                    {colors &&
                        <ProductFormSelect label="Цвет" values={colors} selected={color} onSetValue={setColor}/>}
                    {sizes &&
                        <ProductFormSelect label="Размер" values={sizes} selected={size} onSetValue={setSize}/>}
                    {models &&
                        <ProductFormSelect label="Модель" values={models} selected={model} onSetValue={setModel}/>}
                    {stickers &&
                        <ProductFormSelect label="Номер стикера" values={stickers}
                                           selected={sticker} onSetValue={setSticker}/>}
                    <Button view="primary" block={true} onClick={() => handleClick()}>
                        В корзину
                    </Button>
                </Space>
            </Grid.Col>
        </Grid.Row>
    );
}
