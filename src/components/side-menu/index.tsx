import {ActionButton} from "@alfalab/core-components/action-button";
import {Link} from "@alfalab/core-components/link";
import {SidePanelResponsive} from "@alfalab/core-components/side-panel";
import {Space} from "@alfalab/core-components/space";
import {Typography} from "@alfalab/core-components/typography";
import {Dispatch, ReactElement, SetStateAction} from "react";
import {NavLink as RouterLink} from "react-router-dom";
import {ReactComponent as MailIcon} from "../../assets/icons/mail.svg";
import {ReactComponent as MessageIcon} from "../../assets/icons/message.svg";
import {ReactComponent as PhoneIcon} from "../../assets/icons/phone.svg";
import {SIDE_MODAL_BREAKPOINT} from "../../constants/common";
import {contacts} from "../../constants/contact";
import {contactUs, madeInAlfa, ownDesign, policy} from "../../constants/routes";
import {Logo} from "../logo";

import styles from './index.module.css';

type Props = {
    open: boolean,
    onSetOpen: Dispatch<SetStateAction<boolean>>
}

type ContactsKey = keyof typeof contacts;

const contactIcons: Record<ContactsKey, ReactElement> = {
    mail: <MailIcon/>,
    phone: <PhoneIcon/>,
    whatsapp: <MessageIcon/>
}

export const SideMenu = ({open, onSetOpen}: Props) => {
    const menuRoutes = [madeInAlfa, ownDesign, contactUs];

    const handleModalClose = () => {
        onSetOpen(false);
    }

    return (
        <SidePanelResponsive
            className={styles.container}
            breakpoint={SIDE_MODAL_BREAKPOINT}
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
                <Space size="m">
                    <Typography.Text view="primary-medium" weight="medium" onClick={handleModalClose}>
                        <Link
                            href={`${policy.path}`}
                            Component={RouterLink}
                        >
                            Политика конфиденциальности и обработки персональных данных
                        </Link>
                    </Typography.Text>
                    <Space size="s" direction="horizontal">
                        {Object.entries(contacts).map(([key, {title, link}]) => (
                            <ActionButton
                                key={title}
                                href={link}
                                icon={contactIcons[key as ContactsKey]}
                                colors="inverted"
                                className={styles.icon}
                                title={title}
                            />
                        ))}
                    </Space>
                </Space>
            </SidePanelResponsive.Footer>
        </SidePanelResponsive>
    );
}
