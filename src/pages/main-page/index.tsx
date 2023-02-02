import {Grid} from "@alfalab/core-components/grid";
import {Promo} from "../../components/promo";
import {madeInAlfa, mainPage, ownDesign} from "../../constants/routes";
import {useTitle} from "../../hooks/useTitle";

import styles from "./index.module.css";

export const MainPage = () => {
    useTitle(mainPage.title);

    return (
        <Grid.Row tag="article" gutter={0} justify="center" className={styles.container}>
            <Grid.Col tag="section" width={{ mobile: 12, tablet: 12, desktop: 6 }}>
                <Promo title="Сделано в Альфе" href={madeInAlfa.path} position="left"/>
            </Grid.Col>
            <Grid.Col tag="section" width={{ mobile: 12, tablet: 12, desktop: 6 }}>
                <Promo title="Свой дизайн" href={ownDesign.path} position="right"/>
            </Grid.Col>
        </Grid.Row>
    );
}