import {Button} from "@alfalab/core-components/button";
import {Grid} from "@alfalab/core-components/grid";
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
    const handleSetMenuOpen = () => {
        handleMenuState(true);
    }

    return (
        <Grid.Row
            tag="header"
            gutter={0}
            align="middle"
            justify="between"
            className={classNames(styles.container, className)}
        >
            <Grid.Col width="auto">
                <Logo/>
            </Grid.Col>
            <Grid.Col width="auto">
                <Button
                    view='link'
                    size="s"
                    rightAddons={<MenuIcon className={styles.menuIcon}/>}
                    onClick={handleSetMenuOpen}
                >
                    <span className={styles.menuTitle}>Меню</span>
                </Button>
            </Grid.Col>
        </Grid.Row>
    );
}
