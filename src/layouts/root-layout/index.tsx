import {Outlet} from "react-router-dom";
import {Footer} from "../../components/footer";
import {Header} from "../../components/header";

import styles from "./index.module.css";

export const RootLayout = () => {
    return (
        <div className={styles.container}>
            <Header className={styles.header} />
            <main className={styles.main}>
                <Outlet />
            </main>
            <Footer className={styles.footer} />
        </div>
    );
}