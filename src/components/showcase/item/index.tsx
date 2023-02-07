import {PureCell} from "@alfalab/core-components/pure-cell";
import {Typography} from "@alfalab/core-components/typography";
import {Link as RouterLink} from "react-router-dom";
import {Product} from "../../../types/product";

import styles from './index.module.css';

type Props = {
    product: Product
}

export const ShowcaseItem = ({product}: Props) => {
    const amountColor = product.availability ? "primary" : "disabled";

    return (
        <PureCell
            href={`${product.id}`}
            tag={RouterLink}
            direction="vertical"
            verticalPadding="airy"
        >
            <PureCell.Graphics verticalAlign="center">
                <div className={styles.imageContainer}>
                    <img src={product.preview} alt={product.title} width="368" className={styles.image}/>
                </div>
            </PureCell.Graphics>
            <PureCell.Content>
                <PureCell.Main>
                    <Typography.TitleResponsive tag="h2" view="xsmall">
                        {product.title}
                    </Typography.TitleResponsive>
                    <PureCell.Amount
                        value={product.price}
                        currency='RUR'
                        minority={1}
                        color={amountColor}
                        weight="bold"
                    />
                </PureCell.Main>
            </PureCell.Content>
        </PureCell>
    );
}
