import {Button} from "@alfalab/core-components/button";
import {GenericWrapper} from "@alfalab/core-components/generic-wrapper";
import {Grid} from "@alfalab/core-components/grid";
import cn from "classnames";
import {useEffect, useState} from "react";

import styles from './index.module.css';

type Props = {
    images: string[]
    alt: string
}

export const ProductGallery = ({images, alt}: Props) => {
    const [current, setCurrent] = useState("");

    useEffect(() => {
        if (!!images.length) {
            setCurrent(images[0]);
        }
    }, [images]);

    const handleClick = (chosen: string) => {
        setCurrent(chosen);
    }

    return (
        <GenericWrapper column={true} grow={true}>
            <div className={styles.wrapper}>
                <img key={current} src={current} alt={alt} className={styles.image} width="564"/>
            </div>
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
