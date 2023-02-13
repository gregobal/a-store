import {GenericWrapper} from "@alfalab/core-components/generic-wrapper";
import cn from "classnames";
import {useState} from "react";
import {Outlet} from "react-router-dom";
import {Footer} from "../../components/footer";
import {Header} from "../../components/header";
import {SideMenu} from "../../components/side-menu";

import styles from "./index.module.css";

type Props = {
    wide?: boolean
}

export const RootLayout = ({wide = false}: Props) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const mainContent = wide ? (<Outlet/>) :
        (<GenericWrapper
            column
            padding={{top: "m", left: "xl", bottom: "xl", right: "xl"}}
            className={styles.mainContent}
        >
            <Outlet/>
        </GenericWrapper>);

    return (
        <div className={styles.container}>
            <Header className={styles.header} handleMenuState={setMenuOpen} />
            <main className={styles.main}>
                {mainContent}
            </main>
            <SideMenu open={menuOpen} onSetOpen={setMenuOpen}/>
            <Footer className={cn(styles.footer, {[styles.fixedFooter]: wide})}/>
        </div>
    );
}