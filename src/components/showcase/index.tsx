import {Grid} from "@alfalab/core-components/grid";
import {Typography} from "@alfalab/core-components/typography";
import {Product} from "../../types/product";
import {ShowcaseItem} from "./item";

type Props = {
    title?: string,
    description?: string
    products: Product[]
}

export const Showcase = ({title, description, products}: Props) => {
    return (
        <>
            {title && <Typography.TitleResponsive tag="h1" view="xlarge" weight="bold" color="accent">
                {title}
            </Typography.TitleResponsive>}
            {description && <Typography.Text view="primary-medium" weight="bold">
                {description}
            </Typography.Text>}
            <Grid.Row tag="article" justify="left" gutter={24}>
                {products.map((product) => (
                    <Grid.Col
                        key={product.id}
                        tag="section"
                        width={{mobile: 12, tablet: 6, desktop: 4}}
                    >
                        <ShowcaseItem product={product} />
                    </Grid.Col>
                ))}
            </Grid.Row>
        </>
    );
}
