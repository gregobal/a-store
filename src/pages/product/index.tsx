import {Amount} from "@alfalab/core-components/amount";
import {Grid} from "@alfalab/core-components/grid";
import {Typography} from "@alfalab/core-components/typography";
import {useLoaderData} from "react-router-dom";
import {ProductGallery} from "../../components/product-gallery";
import {useTitle} from "../../hooks/useTitle";
import {Product} from "../../types/product";

import styles from "./index.module.css";

const colWidth = {mobile: 12, tablet: 12, desktop: 6};

export const ProductPage = () => {

    useTitle("Product");
    const {title, price, images} = useLoaderData() as Product;

    return (
        <Grid.Row tag="article" gutter={24} justify="center" className={styles.container}>
            <Grid.Col tag="section" width={colWidth}>
                <ProductGallery images={images ?? []} alt={title}/>
            </Grid.Col>
            <Grid.Col tag="section" width={colWidth}>
                <Typography.TitleResponsive tag="h1" view="small">
                    {title}
                </Typography.TitleResponsive>
                <Typography.TitleResponsive tag="div" view="xsmall" weight="bold">
                    <Amount
                        value={price}
                        currency='RUR'
                        minority={1}
                        bold="full"
                    />
                </Typography.TitleResponsive>
            </Grid.Col>
        </Grid.Row>
    );
}
