import {Typography} from "@alfalab/core-components/typography";
import styles from './footer.module.css';
export const Footer = () => {
    return (
        <>
            <footer className={styles.container}>
                <Typography.Text view="secondary-small">
                    &copy; ООО «Альфа Фьюче Пипл», 2022
                </Typography.Text>
            </footer>
        </>
    );
}
