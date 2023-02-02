import {Typography} from "@alfalab/core-components/typography";
import classNames from "classnames";

import styles from './index.module.css';

type Props = {
    className?: string,
}

export const Footer = ({className}: Props) => {
    const footer = classNames(styles.container, className);

    return (
        <>
            <footer className={footer}>
                <Typography.Text view="secondary-small">
                    &copy; ООО «Альфа Фьюче Пипл», 2022
                </Typography.Text>
            </footer>
        </>
    );
}
