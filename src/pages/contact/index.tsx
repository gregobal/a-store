import {Gap} from "@alfalab/core-components/gap";
import {Link} from "@alfalab/core-components/link";
import {Typography} from "@alfalab/core-components/typography";
import {Link as RouterLink} from "react-router-dom";
import {YMap} from "../../components/ymap";
import {contacts} from "../../constants/contact";
import {contactUs, policy} from "../../constants/routes";
import {useTitle} from "../../hooks/useTitle";

export const ContactPage = () => {
    useTitle(contactUs.title);

    return (
        <>
            <Typography.TitleResponsive tag="h1" view="xlarge" weight="bold">
                {contactUs.title}
            </Typography.TitleResponsive>
            <Gap size="4xl"/>
            {[contacts.phone, contacts.mail].map(({title, text, link}) => (
                <Typography.Text key={title} view="primary-medium" weight="bold" title={title}>
                    <Link href={link} underline={false}>
                        {text}
                    </Link>
                </Typography.Text>
            ))}
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
                <Link href={`/${policy.path}`} Component={RouterLink}>
                    Политика конфиденциальности и обработки персональных данных
                </Link>
            </Typography.Text>
        </>
    );
}
