import {GenericWrapper} from "@alfalab/core-components/generic-wrapper";
import cn from "classnames";
import {useState} from "react";
import {Outlet, useNavigation} from "react-router-dom";
import {CartIcon} from "../../components/cart/icon";
import {CartSidePanel} from "../../components/cart/side-panel";
import {Footer} from "../../components/footer";
import {Header} from "../../components/header";
import {SideMenu} from "../../components/side-menu";

import styles from "./index.module.css";

type Props = {
    wide?: boolean
}

export const RootLayout = ({wide = false}: Props) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [cartSidePanelOpen, setCartSidePanelOpen] = useState(false);

    const navigation = useNavigation();

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
            <Header className={styles.header} handleMenuState={setMenuOpen}/>
            <main className={cn(styles.main, {[styles.loading]: navigation.state === "loading"})}>
                {mainContent}
            </main>
            <SideMenu open={menuOpen} onSetOpen={setMenuOpen}/>
            <Footer className={cn(styles.footer, {[styles.fixedFooter]: wide})}/>
            <CartIcon handleCartSidePanelState={setCartSidePanelOpen}/>
            <CartSidePanel open={cartSidePanelOpen} onSetOpen={setCartSidePanelOpen}/>
        </div>
    );
}
