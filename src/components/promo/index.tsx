import {Link} from "@alfalab/core-components/link";
import {Typography} from "@alfalab/core-components/typography";
import {Link as RouterLink} from "react-router-dom";

import styles from './index.module.css';

type Props = {
    title: string,
    href: string,
    position: "left" | "right";
}

export const Promo = ({title, href, position}: Props) => {
    const containerStyles = [
        styles.container,
        position === "left" ? styles.left : styles.right
    ].join(" ");

    return (
        <Link
            className={containerStyles}
            Component={RouterLink}
            href={href}
            underline={false}
        >
            <Typography.Title tag="h1" weight="bold">
                {title}
            </Typography.Title>
        </Link>
    );
}
