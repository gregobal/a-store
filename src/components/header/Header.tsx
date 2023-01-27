import {Grid} from "@alfalab/core-components/grid";
import {Link} from "@alfalab/core-components/link";
import {Typography} from "@alfalab/core-components/typography";
import {Link as RouterLink} from "react-router-dom";
import {ReactComponent as MenuIcon} from "../../assets/menu.svg";
import styles from './header.module.css';

export const Header = () => {
    return (
        <Grid.Row tag="header" gutter={0} align="middle" justify="between" className={styles.container}>
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
                {/* Временно до появления компонента меню, ссылка просто роутер проверить */}
                <Typography.Title tag="div" view="medium">
                    <Link
                        Component={RouterLink}
                        href={"/contact-us"}
                        view='primary'
                        underline={false}
                        leftAddons={<MenuIcon width={30}/>}
                    >
                        <span className={styles["menu-title"]}>меню</span>
                    </Link>
                </Typography.Title>
            </Grid.Col>
        </Grid.Row>
    );
}
