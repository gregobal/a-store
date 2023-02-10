import {PureCell} from "@alfalab/core-components/pure-cell";
import {Typography} from "@alfalab/core-components/typography";
import {Link as RouterLink} from "react-router-dom";
import {Product} from "../../../types/product";

import styles from './index.module.css';

type Props = {
    product: Product
}

export const ShowcaseItem = ({product}: Props) => {
    const {id, title, preview, price, availability, subtitle} = product;
    const amountColor = availability ? "primary" : "disabled";

    return (
        <PureCell
            href={`${id}`}
            tag={RouterLink}
            direction="vertical"
            verticalPadding="airy"
        >
            <PureCell.Graphics verticalAlign="center">
                <div className={styles.wrapper}>
                    <img src={preview} alt={title} width="368" className={styles.image}/>
                </div>
            </PureCell.Graphics>
            <PureCell.Content>
                <PureCell.Main>
                    <Typography.TitleResponsive tag="h2" view="xsmall">
                        {title}
                    </Typography.TitleResponsive>
                    {subtitle && <Typography.Text view="primary-small" weight="bold" color="secondary">
                        {subtitle}
                    </Typography.Text>}
                    <PureCell.Amount
                        value={price}
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
