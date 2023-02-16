import {Button} from "@alfalab/core-components/button";
import {GenericWrapper} from "@alfalab/core-components/generic-wrapper";
import {Grid} from "@alfalab/core-components/grid";
import cn from "classnames";
import {useEffect, useState} from "react";
import {Image} from "../../image";

import styles from './index.module.css';

type Props = {
    images: string[]
    alt: string
}

export const ProductGallery = ({images, alt}: Props) => {
    const [current, setCurrent] = useState("");

    useEffect(() => {
        setCurrent(images[0]);
    }, [images]);

    const handleClick = (chosen: string) => {
        setCurrent(chosen);
    }

    return (
        <GenericWrapper column={true} grow={true}>
            <Image src={current} alt={alt} width={564} ratio="w3h4"/>
            <Grid.Row gutter={8} justify="left">
                {images.map((src) => (
                    <Grid.Col key={src} width="auto">
                        <Button
                            style={{backgroundImage: `url("${src}")`}}
                            className={cn(styles.button, {[styles.active]: src === current})}
                            view='link'
                            size="xl"
                            block={true}
                            onClick={() => handleClick(src)}
                        />
                    </Grid.Col>
                ))}
            </Grid.Row>
        </GenericWrapper>
    );
}
