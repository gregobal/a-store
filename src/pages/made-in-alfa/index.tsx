import {Gap} from "@alfalab/core-components/gap";
import {Typography} from "@alfalab/core-components/typography";
import {useLoaderData} from "react-router-dom";
import {Showcase} from "../../components/showcase";
import {madeInAlfa} from "../../constants/routes";
import {useTitle} from "../../hooks/useTitle";
import {Product} from "../../types/product";

export const MadeInAlfaPage = () => {
    useTitle(madeInAlfa.title);

    const products = useLoaderData() as Product[];

    return (
        <>
            <Typography.TitleResponsive tag="h1" view="xlarge" weight="bold">
                {madeInAlfa.title}
            </Typography.TitleResponsive>
            <Typography.Text view="primary-medium" weight="bold">
                Хотим каждую из этих вещей! Себе, родным и друзьям
            </Typography.Text>
            <Gap size="m"/>
            <Showcase products={products}/>
        </>
    );
}
