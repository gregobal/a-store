import {Grid} from "@alfalab/core-components/grid";
import {Link} from "@alfalab/core-components/link";
import {Typography} from "@alfalab/core-components/typography";
import {Link as RouterLink} from "react-router-dom";
import {ReactComponent as MenuIcon} from "../../assets/menu.svg";
import styles from './index.module.css';

type Props = {
    className?: string | undefined;
}

export const Header = ({className}: Props) => {
    const headerStyles = [styles.container, className].join(" ");

    return (
        <Grid.Row tag="header" gutter={0} align="middle" justify="between" className={headerStyles}>
            <Grid.Col width="auto">
                <Typography.Title tag="div" view="medium" weight="bold">
                    <Link
                        Component={RouterLink}
                        href="/"
                        underline={false}
                    >
                        <span className={styles.logo}>A-Store</span>
                    </Link>
                </Typography.Title>
            </Grid.Col>
            <Grid.Col width="auto">
                <Typography.Title tag="div" view="medium" weight="bold">
                    <Link
                        className={styles.menuLink}
                        Component={RouterLink}
                        href={"/contact-us"}
                        view='primary'
                        underline={false}
                        leftAddons={<MenuIcon className={styles.menuIcon} />}
                    >
                        <span className={styles.menuTitle}>меню</span>
                    </Link>
                </Typography.Title>
            </Grid.Col>
        </Grid.Row>
    );
}
