import {Button} from "@alfalab/core-components/button";
import {Checkbox} from "@alfalab/core-components/checkbox";
import {Gap} from "@alfalab/core-components/gap";
import {Input} from "@alfalab/core-components/input";
import {PhoneInput} from "@alfalab/core-components/phone-input";
import {Radio} from "@alfalab/core-components/radio";
import {RadioGroup} from "@alfalab/core-components/radio-group";
import {Space} from "@alfalab/core-components/space";
import {Textarea} from "@alfalab/core-components/textarea";
import {Typography} from "@alfalab/core-components/typography";
import {yupResolver} from "@hookform/resolvers/yup";
import {Dispatch, SetStateAction, useState} from "react";
import {useForm} from "react-hook-form";
import {useAppDispatch} from "../../../../hooks/useAppDispatch";
import {placeAnOrder} from "../../../../store/order";
import {DeliveryType, deliveryTypes, OrderContact} from "../../../../types/order";
import {orderContactSchema} from "./schema";

type Props = {
    deliveryType: DeliveryType,
    onSetDeliveryType: Dispatch<SetStateAction<DeliveryType>>
}

export const OrderDetailsForm = ({deliveryType, onSetDeliveryType}: Props) => {
    const dispatch = useAppDispatch();
    const [agreement, setAgreement] = useState(false);

    const {register, formState: {errors}, handleSubmit} = useForm({
        resolver: yupResolver(orderContactSchema)
    });

    const handleChangeAgreement = (_: unknown, payload?: ({ checked: boolean })) => {
        if (payload) {
            setAgreement(payload.checked);
        }
    }

    const handleChangeDelivery = (_: unknown, payload?: { value: string; name?: string; }) => {
        if (payload) {
            onSetDeliveryType(payload.value as DeliveryType);
        }
    }

    const onSubmit = (data: unknown) => {
        const contact = data as OrderContact;
        dispatch(placeAnOrder({
            ...contact,
            deliveryType,
            paymentType: "Банковская карта"
        }));
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Space size="s" direction="vertical" fullWidth={true}>
                <Typography.Text view="primary-medium" weight="medium">
                    Фамилия Имя Отчество
                </Typography.Text>
                <Input
                    size="m" block={true}
                    autoComplete="name"
                    placeholder="Фамилия Имя Отчество"
                    {...register("name")}
                    error={errors.name?.message as string}
                />
                <Typography.Text view="primary-medium" weight="medium">
                    E-mail
                </Typography.Text>
                <Input
                    size="m" block={true}
                    autoComplete="email"
                    placeholder="example@site.ru"
                    {...register("email")}
                    error={errors.email?.message as string}
                />
                <Typography.Text view="primary-medium" weight="medium">
                    Телефон
                </Typography.Text>
                <PhoneInput
                    size="m" block={true}
                    autoComplete="tel"
                    placeholder="+7 000 000-00-00"
                    {...register("phone")}
                    error={errors.phone?.message as string}
                />
                <Typography.Text view="primary-medium" weight="medium">
                    Адрес (если вы выбрали самовывоз — оставьте поле пустым)
                </Typography.Text>
                <Input
                    size="m" block={true}
                    autoComplete="address"
                    placeholder="Индекс, город, улица, дом, квартира"
                    {...register("address")}
                    error={errors.address?.message as string}
                />
                <Typography.Text view="primary-medium" weight="medium">
                    Комментарий к заказу
                </Typography.Text>
                <Textarea minRows={3} autosize={false} block={true}/>
                <Gap size="s"/>
                <Typography.Text view="primary-medium" weight="medium">
                    Доставка
                </Typography.Text>
                <RadioGroup
                    value={deliveryType}
                    onChange={handleChangeDelivery}
                >
                    {deliveryTypes.map((value) => (
                        <Radio key={value} size="m" block={true} label={value} value={value}/>
                    ))}
                </RadioGroup>
                <Gap size="s"/>
                <Checkbox
                    size='m'
                    block={true}
                    label="Согласен с политикой конфиденциальности и обработки персональных данных"
                    checked={agreement}
                    onChange={handleChangeAgreement}
                />
                <Button view="primary" block={true} type="submit" disabled={!agreement}>
                    Дальше
                </Button>
            </Space>
        </form>
    );
}
