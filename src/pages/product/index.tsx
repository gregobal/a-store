import {Amount} from "@alfalab/core-components/amount";
import {Grid} from "@alfalab/core-components/grid";
import {Space} from "@alfalab/core-components/space";
import {Typography} from "@alfalab/core-components/typography";
import {useLoaderData} from "react-router-dom";
import {ProductDescription} from "../../components/product/description";
import {ProductForm} from "../../components/product/form";
import {ProductGallery} from "../../components/product/gallery";
import {useTitle} from "../../hooks/useTitle";
import {Product} from "../../types/product";

import styles from "./index.module.css";

const colWidth = {mobile: 12, tablet: 12, desktop: 6};

export const ProductPage = () => {
    useTitle("Product");

    const product = useLoaderData() as Product;
    const {title, price, images, description} = product;

    return (
        <Grid.Row tag="article" gutter={24} justify="center" className={styles.container}>
            <Grid.Col tag="section" width={colWidth}>
                <ProductGallery images={images ?? []} alt={title}/>
            </Grid.Col>
            <Grid.Col tag="section" width={colWidth} className={styles.secondCol}>
                <Space size="m" fullWidth={true}>
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
                    <ProductForm product={product}/>
                    <ProductDescription description={description}/>
                </Space>
            </Grid.Col>
        </Grid.Row>
    );
}
