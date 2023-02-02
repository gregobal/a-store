import {Button} from "@alfalab/core-components/button";
import {Grid} from "@alfalab/core-components/grid";
import {Typography} from "@alfalab/core-components/typography";
import classNames from "classnames";
import {Dispatch, SetStateAction} from "react";
import {ReactComponent as MenuIcon} from "../../assets/icons/menu.svg";
import {Logo} from "../logo";

import styles from './index.module.css';

type Props = {
    className?: string,
    handleMenuState: Dispatch<SetStateAction<boolean>>
}

export const Header = ({className, handleMenuState}: Props) => {
    const header = classNames(styles.container, className);

    const handleSetMenuOpen = () => {
        handleMenuState(true);
    }

    return (
        <Grid.Row tag="header" gutter={0} align="middle" justify="between" className={header}>
            <Grid.Col width="auto">
                <Logo/>
            </Grid.Col>
            <Grid.Col width="auto">
                <Button
                    view='link'
                    size="s"
                    leftAddons={<MenuIcon className={styles.menuIcon}/>}
                    onClick={handleSetMenuOpen}
                >
                    <Typography.Title tag="div" weight="bold" className={styles.menuTitle}>
                        меню
                    </Typography.Title>
                </Button>
            </Grid.Col>
        </Grid.Row>
    );
}
