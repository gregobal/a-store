import {GenericWrapper} from "@alfalab/core-components/generic-wrapper";
import {Link} from "@alfalab/core-components/link";
import {Typography} from "@alfalab/core-components/typography";
import {Link as RouterLink} from "react-router-dom";
import {useTitle} from "../../hooks/useTitle";

export const ErrorPage = () => {
    useTitle("error");

    return (
        <GenericWrapper
            padding={{top: "xl", left: "xl", bottom: "xl", right: "xl"}}
            column={true}
            alignItems="center"
        >
            <Typography.TitleResponsive tag="h1" view="xlarge" weight="bold" color="accent">
                Ошибка
            </Typography.TitleResponsive>
            <Typography.Text view="primary-medium" weight="bold">
                Произошла непредвиденная ошибка,
                пока ее исправляют, попробуйте перейти на&nbsp;
                <Link
                    Component={RouterLink}
                    href="/"
                    view='primary'
                >
                    Главную страницу
                </Link>
                &nbsp;или вернуться позже
            </Typography.Text>
        </GenericWrapper>
    );
}
