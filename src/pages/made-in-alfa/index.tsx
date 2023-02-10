import {Gap} from "@alfalab/core-components/gap";
import {Typography} from "@alfalab/core-components/typography";
import {Showcase} from "../../components/showcase";
import {madeInAlfa} from "../../constants/routes";
import {useTitle} from "../../hooks/useTitle";

import products from "./products.json";

export const MadeInAlfaPage = () => {
    useTitle(madeInAlfa.title);

    return (
        <>
            <Typography.TitleResponsive tag="h1" view="xlarge" weight="bold">
                {madeInAlfa.title}
            </Typography.TitleResponsive>
            <Typography.Text view="primary-medium" weight="bold">
                Хотим каждую из этих вещей! Себе, родным и друзьям
            </Typography.Text>
            <Gap size="m"/>
            <Showcase products={products} />
        </>
    );
}
