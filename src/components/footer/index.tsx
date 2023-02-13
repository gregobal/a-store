import {Typography} from "@alfalab/core-components/typography";
import cn from "classnames";

import styles from './index.module.css';

type Props = {
    className?: string,
}

export const Footer = ({className}: Props) => {
    return (
        <>
            <footer className={cn(styles.container, className)}>
                <Typography.Text view="secondary-small">
                    &copy; ООО «Альфа Фьюче Пипл», 2022
                </Typography.Text>
            </footer>
        </>
    );
}
