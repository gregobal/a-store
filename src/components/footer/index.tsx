import {Typography} from "@alfalab/core-components/typography";
import styles from './index.module.css';

type Props = {
    className?: string | undefined;
}

export const Footer = ({className}: Props) => {
    const footerStyles = [styles.container, className].join(" ");

    return (
        <>
            <footer className={footerStyles}>
                <Typography.Text view="secondary-small">
                    &copy; ООО «Альфа Фьюче Пипл», 2022
                </Typography.Text>
            </footer>
        </>
    );
}
