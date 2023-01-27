import {Grid} from "@alfalab/core-components/grid";
import {Space} from "@alfalab/core-components/space";
import {Typography} from "@alfalab/core-components/typography";
import {ReactComponent as MenuIcon} from "../../assets/menu.svg";
import styles from './header.module.css';

export const Header = () => {
    return (
        <Grid.Row tag="header" gutter={0} align="middle" justify="between" className={styles.container}>
            <Grid.Col width="auto">
                <Typography.Title tag="div" view="medium" weight="bold" className={styles.logo}>
                    A-Store
                </Typography.Title>
            </Grid.Col>
            <Grid.Col width="auto">
                <Space direction="horizontal" size="s">
                    <MenuIcon height={40} width={30} className={styles["menu-icon"]}/>
                    <Typography.Title tag="div" view="medium" className={styles["menu-title"]}>
                        меню
                    </Typography.Title>
                </Space>
            </Grid.Col>
        </Grid.Row>
    );
}
