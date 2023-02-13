import {ActionButton} from "@alfalab/core-components/action-button";
import {Link} from "@alfalab/core-components/link";
import {PureCell} from "@alfalab/core-components/pure-cell";
import {SidePanelResponsive} from "@alfalab/core-components/side-panel";
import {Space} from "@alfalab/core-components/space";
import {Typography} from "@alfalab/core-components/typography";
import {Dispatch, SetStateAction} from "react";
import {NavLink as RouterLink} from "react-router-dom";
import {contactUs, madeInAlfa, ownDesign} from "../../constants/routes";
import {Logo} from "../logo";
import {ReactComponent as MailIcon} from "../../assets/icons/mail.svg";
import {ReactComponent as PhoneIcon} from "../../assets/icons/phone.svg";
import {ReactComponent as MessageIcon} from "../../assets/icons/message.svg";

import styles from './index.module.css';

type Props = {
    open: boolean,
    onSetOpen: Dispatch<SetStateAction<boolean>>
}

export const SideMenu = ({open, onSetOpen}: Props) => {
    const menuRoutes = [madeInAlfa, ownDesign, contactUs];
    const actionIcons = [MailIcon, PhoneIcon, MessageIcon];

    const handleModalClose = () => {
        onSetOpen(false);
    }

    return (
        <SidePanelResponsive
            className={styles.container}
            disableBlockingScroll={true}
            open={open}
            onClose={handleModalClose}
        >
            <SidePanelResponsive.Header/>
            <SidePanelResponsive.Content>
                <Space size="l" fullWidth>
                    <Logo className={styles.logoContainer} onClick={handleModalClose}/>
                    {menuRoutes.map((route) => (
                        <Typography.Title key={route.path} tag="div" weight="bold" onClick={handleModalClose}>
                            <Link
                                Component={RouterLink}
                                href={route.path}
                                underline={false}
                            >
                                {route.title}
                            </Link>
                        </Typography.Title>
                    ))}
                </Space>
            </SidePanelResponsive.Content>
            <SidePanelResponsive.Footer>
                <PureCell>
                    <PureCell.Content>
                        <PureCell.Main>
                            <PureCell.Text titleColor="primary" view="component">
                                Политика конфиденциальности
                            </PureCell.Text>
                            <PureCell.Text titleColor="primary" view="primary-small">
                                и обработки персональных данных
                            </PureCell.Text>
                        </PureCell.Main>
                        <PureCell.Footer>
                            <Space size="s" direction="horizontal">
                                {actionIcons.map((Icon, idx) => (
                                    <ActionButton key={idx} icon={<Icon/>} colors="inverted" className={styles.icon}/>
                                ))}
                            </Space>
                        </PureCell.Footer>
                    </PureCell.Content>
                </PureCell>
            </SidePanelResponsive.Footer>
        </SidePanelResponsive>
    );
}
