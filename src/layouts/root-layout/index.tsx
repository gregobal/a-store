import {useState} from "react";
import {Outlet} from "react-router-dom";
import {Footer} from "../../components/footer";
import {Header} from "../../components/header";
import {SideMenu} from "../../components/side-menu";

import styles from "./index.module.css";

export const RootLayout = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className={styles.container}>
            <Header className={styles.header} handleMenuState={setMenuOpen} />
            <main className={styles.main}>
                <Outlet />
            </main>
            <SideMenu open={menuOpen} onSetOpen={setMenuOpen} />
            <Footer className={styles.footer} />
        </div>
    );
}