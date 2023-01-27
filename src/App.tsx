import React from 'react';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Page} from "./layouts";
import {StubPage} from "./pages";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Page/>,
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
])

function App() {
    return (
        <RouterProvider router={router}/>
    )
}

export default App;
