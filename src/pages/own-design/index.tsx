import {Gap} from "@alfalab/core-components/gap";
import {Typography} from "@alfalab/core-components/typography";
import {Showcase} from "../../components/showcase";
import {ownDesign} from "../../constants/routes";
import {useTitle} from "../../hooks/useTitle";

import groups from "./groups.json";

export const OwnDesignPage = () => {
    useTitle(ownDesign.title);

    return (
        <>
            <Typography.TitleResponsive tag="h1" view="xlarge" weight="bold">
                {ownDesign.title}
            </Typography.TitleResponsive>
            <Typography.Text view="primary-medium" weight="bold">
                Выберите вещь, а затем — цвет, размер и стикер.
            </Typography.Text>
            <Typography.Text view="primary-medium" weight="bold">
                Перенесём стикер на вещь как на фото
            </Typography.Text>
            <Gap size="m"/>
            {groups.map((group) => (
                <Showcase key={group.id} {...group} />
            ))}
            <Gap size="m"/>
            <Typography.Text view="primary-large" weight="bold" color="tertiary">
                Посмотреть и потрогать все стикеры можно в A-Store на Технопарке.
                А ещё там можно добавить сразу несколько стикеров на одну вещь.
            </Typography.Text>
        </>
    );
}
