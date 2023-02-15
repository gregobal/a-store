import {Skeleton} from "@alfalab/core-components/skeleton";
import {useImageLoadingState} from "@alfalab/hooks";
import cn from "classnames";

import styles from './index.module.css';

type Props = {
    src: string,
    alt: string,
    width: number,
    ratio?: "w1h1" | "w3h4",
    isFadeIn?: boolean
}

export const Image = ({src, alt, width, ratio = "w1h1", isFadeIn}: Props) => {
    const loadingState = useImageLoadingState({src});

    return (
        <Skeleton
            className={cn(styles.wrapper, styles[ratio])}
            visible={loadingState === "loading"}
            animate={true}
        >
            <img
                key={isFadeIn ? src : undefined}
                className={cn(styles.image, {[styles.fadeIn]: isFadeIn})}
                src={src}
                alt={alt}
                width={width}
            />
        </Skeleton>
    );
}
