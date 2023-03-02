import {object, string} from 'yup';

const requiredMessage = "Пожалуйста, заполните обязательное поле";

export const orderContactSchema = object({
    name: string().required(requiredMessage).min(2, "Укажите, пожалуйста, имя полностью"),
    email: string().required(requiredMessage).email("Укажите, пожалуйста, корректный email"),
    phone: string().required(requiredMessage).length(16, "Укажите, пожалуйста, корректный номер телефона"),
    address: string().required(requiredMessage).min(10, "Укажите, пожалуйста, корректный адрес для доставки")
});
