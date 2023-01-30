import {createBrowserRouter} from "react-router-dom";
import {RootLayout} from "./layouts";
import {StubPage} from "./pages";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout/>,
        children: [
            {
                path: "/",
                index: true,
                element: <StubPage pageTitle="Главная"/>
            },
            {
                path: "sdelano-v-alfe",
                element: <StubPage pageTitle="Сделано в Альфе"/>
            },
            {
                path: "svoy-dizain",
                element: <StubPage pageTitle="Свой дизайн"/>
            },
            {
                path: "contact-us",
                element: <StubPage pageTitle="Контакты"/>
            },
            {
                path: "tcart",
                element: <StubPage pageTitle="Корзина"/>
            },
        ]
    }
]);
