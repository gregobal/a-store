import {createBrowserRouter} from "react-router-dom";
import {CART, CONTACT_US, MADE_IN_ALFA, OWN_DESIGN} from "./constants/routes";
import {RootLayout} from "./layouts/root-layout";
import {MainPage} from "./pages/main-page";
import {StubPage} from "./pages/stub-page";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout/>,
        children: [
            {
                path: "/",
                index: true,
                element: <MainPage/>
            },
            {
                path: MADE_IN_ALFA,
                element: <StubPage pageTitle="Сделано в Альфе"/>
            },
            {
                path: OWN_DESIGN,
                element: <StubPage pageTitle="Свой дизайн"/>
            },
            {
                path: CONTACT_US,
                element: <StubPage pageTitle="Контакты"/>
            },
            {
                path: CART,
                element: <StubPage pageTitle="Корзина"/>
            },
        ]
    }
]);
