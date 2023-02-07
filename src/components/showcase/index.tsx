import {Grid} from "@alfalab/core-components/grid";
import {Product} from "../../types/product";
import {ShowcaseItem} from "./item";

type Props = {
    products: Product[]
}

export const Showcase = ({products}: Props) => {
    return (
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
    );
}
