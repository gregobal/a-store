import {Button} from "@alfalab/core-components/button";
import {Checkbox} from "@alfalab/core-components/checkbox";
import {Gap} from "@alfalab/core-components/gap";
import {Input} from "@alfalab/core-components/input";
import {Radio} from "@alfalab/core-components/radio";
import {RadioGroup} from "@alfalab/core-components/radio-group";
import {Space} from "@alfalab/core-components/space";
import {Textarea} from "@alfalab/core-components/textarea";
import {Typography} from "@alfalab/core-components/typography";
import {Dispatch, Fragment, SetStateAction, useState} from "react";
import {useForm} from "react-hook-form";
import {withoutDelivery} from "../../../../constants/order";
import {useAppDispatch} from "../../../../hooks/useAppDispatch";
import {placeAnOrder} from "../../../../store/order";
import {DeliveryType, deliveryTypes, OrderContact} from "../../../../types/order";

type Props = {
    deliveryType: DeliveryType,
    onSetDeliveryType: Dispatch<SetStateAction<DeliveryType>>
}

const requiredInputErrorMessage = "Пожалуйста, заполните обязательное поле";

const inputs = [
    {
        name: "name",
        placeholder: "Фамилия Имя Отчество",
        required: requiredInputErrorMessage,
        pattern: {
            value: /^[а-яё\w-]+ [а-яё\w-]+ ?[а-яё\w]+$/i,
            message: "Укажите, пожалуйста, имя полностью"
        },
        title: "ФИО"
    },
    {
        name: "email",
        placeholder: "example@site.ru",
        required: requiredInputErrorMessage,
        pattern: {
            value: /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/,
            message: "Укажите, пожалуйста, корректный email"
        },
        title: "E-mail"
    },
    {
        name: "phone",
        type: "tel",
        placeholder: "+79990009900",
        required: requiredInputErrorMessage,
        pattern: {
            value: /^((\+7|7|8)+([0-9]){10})$/,
            message: "Укажите, пожалуйста, корректный номер телефона"
        },
        title: "Телефон"
    },
    {
        name: "address",
        placeholder: "Индекс, город, улица, дом, квартира",
        required: requiredInputErrorMessage,
        minLength: {
            value: 10,
            message: "Укажите, пожалуйста, корректный адрес для доставки"
        },
        title: "Адрес (если вы выбрали самовывоз — оставьте поле пустым)"
    }
]

export const OrderDetailsForm = ({deliveryType, onSetDeliveryType}: Props) => {
    const dispatch = useAppDispatch();
    const [agreement, setAgreement] = useState(false);

    const {register, formState: {errors}, handleSubmit} = useForm();

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
                {inputs.map(({title, name, type, placeholder, required, pattern, minLength}) => (
                    <Fragment key={name}>
                        <Typography.Text view="primary-medium" weight="medium">
                            {title}
                        </Typography.Text>
                        <Gap size="s"/>
                        <Input
                            size="m" block={true}
                            autoComplete={type ?? name}
                            placeholder={placeholder}
                            {...register(name, {
                                required: name === "address" ? {
                                    value: deliveryType !== withoutDelivery,
                                    message: required
                                } : required,
                                pattern,
                                minLength
                            })}
                            error={errors?.[name]?.message as string}
                        />
                    </Fragment>
                ))}
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
