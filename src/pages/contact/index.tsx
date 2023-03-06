import {Gap} from "@alfalab/core-components/gap";
import {Link} from "@alfalab/core-components/link";
import {Typography} from "@alfalab/core-components/typography";
import {Link as RouterLink} from "react-router-dom";
import {YMap} from "../../components/ymap";
import {contactUs} from "../../constants/routes";
import {useTitle} from "../../hooks/useTitle";

const A_STORE_EMAIL = "info@alfabankstore.ru";
const A_STORE_PHONE = "+7 906 061 60 20";

export const ContactPage = () => {
    useTitle(contactUs.title);

    return (
        <>
            <Typography.TitleResponsive tag="h1" view="xlarge" weight="bold">
                {contactUs.title}
            </Typography.TitleResponsive>
            <Gap size="4xl"/>
            <Typography.Text view="primary-medium" weight="bold">
                <Link
                    href={`tel: ${A_STORE_PHONE}`}
                    underline={false}
                >
                    {A_STORE_PHONE}
                </Link>
            </Typography.Text>
            <Typography.Text view="primary-medium" weight="bold">
                <Link
                    href={`mailto: ${A_STORE_EMAIL}`}
                    underline={false}
                >
                    {A_STORE_EMAIL}
                </Link>
            </Typography.Text>
            <Gap size="l"/>
            <Typography.Text view="primary-medium" weight="bold">
                г. Москва, пр-т Андропова, 18 корп. 3
            </Typography.Text>
            <Gap size="l"/>
            <Typography.Text view="primary-medium" weight="bold">
                пн-чт:
            </Typography.Text>
            <Typography.Text view="primary-medium" weight="bold">
                10:00—19:00
            </Typography.Text>
            <Typography.Text view="primary-medium" weight="bold">
                пт:
            </Typography.Text>
            <Typography.Text view="primary-medium" weight="bold">
                10:00—17:30
            </Typography.Text>
            <Gap size="l"/>
            <Typography.Text view="primary-medium" weight="bold">
                Принимаем к оплате карты Visa, Mastercard, МИР.
            </Typography.Text>
            <Gap size="xl"/>
            <YMap
                hint="Альфа-Банк"
                description="Штаб-квартира на Технопарке"
                coordinates={[55.694459, 37.661994]}
                zoom={14}
            />
            <Gap size="xl"/>
            <Typography.Text view="primary-small" weight="bold">
                <Link
                    href="#"
                    Component={RouterLink}
                >
                    Политика конфиденциальностии обработки персональных данных
                </Link>
            </Typography.Text>
        </>
    );
}
