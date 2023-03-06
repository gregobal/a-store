const A_STORE_EMAIL = "info@alfabankstore.ru";
const A_STORE_PHONE = "+7 906 061 60 20";

export const contacts = {
    mail: {
        title: "Email",
        text: A_STORE_EMAIL,
        link: `mailto: ${A_STORE_EMAIL}`
    },
    phone: {
        title: "Телефон",
        text: A_STORE_PHONE,
        link: `tel: ${A_STORE_PHONE}`
    },
    whatsapp: {
        title: "Whatsapp",
        text: A_STORE_PHONE,
        link: `whatsapp://send?phone=${A_STORE_PHONE}`
    }
}
