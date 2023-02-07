import {Gap} from "@alfalab/core-components/gap";
import {GenericWrapper} from "@alfalab/core-components/generic-wrapper";
import {Typography} from "@alfalab/core-components/typography";
import {Showcase} from "../../components/showcase";
import {madeInAlfa} from "../../constants/routes";
import {useTitle} from "../../hooks/useTitle";

import styles from "./index.module.css";

import products from "./products.json";

export const MadeInAlfa = () => {
    useTitle(madeInAlfa.title);

    return (
        <GenericWrapper
            column
            padding={{top: "m", left: "xl", bottom: "xl", right: "xl"}}
            className={styles.container}
        >
            <Typography.TitleResponsive tag="h1" view="xlarge" weight="bold">
                {madeInAlfa.title}
            </Typography.TitleResponsive>
            <Typography.Text view="primary-medium" weight="bold">
                Хотим каждую из этих вещей! Себе, родным и друзьям
            </Typography.Text>
            <Gap size="m"/>
            <Showcase products={products} />
        </GenericWrapper>
    );
}
