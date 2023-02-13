import {Link} from "@alfalab/core-components/link";
import {Typography} from "@alfalab/core-components/typography";
import {Link as RouterLink} from "react-router-dom";
import {useTitle} from "../../hooks/useTitle";

export const NoMatchPage = () => {
    useTitle("404");

    return (
        <>
            <Typography.TitleResponsive tag="h1" view="xlarge" weight="bold">
                Страница не найдена
            </Typography.TitleResponsive>
            <Typography.Text view="primary-medium" weight="bold">
                Мы еще не сделали такую страницу,
                что бы снова не потеряться - воспользуйся Меню
                или начни с&nbsp;
                <Link
                    Component={RouterLink}
                    href="/"
                    view='primary'
                >
                    Главной страницы
                </Link>
            </Typography.Text>
        </>
    );
}
