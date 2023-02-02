import {Link} from "@alfalab/core-components/link";
import {Typography} from "@alfalab/core-components/typography";
import classNames from "classnames";
import {Link as RouterLink} from "react-router-dom";

import styles from './index.module.css';

type Props = {
    title: string,
    href: string,
    position: "left" | "right";
}

export const Promo = ({title, href, position}: Props) => {
    const container = classNames(styles.container, styles[position]);

    return (
        <Link
            className={container}
            Component={RouterLink}
            href={href}
            underline={false}
        >
            <Typography.TitleResponsive tag="h1" weight="bold">
                {title}
            </Typography.TitleResponsive>
        </Link>
    );
}
