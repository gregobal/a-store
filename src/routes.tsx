import {createBrowserRouter} from "react-router-dom";
import {cart, contactUs, madeInAlfa, ownDesign} from "./constants/routes";
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
                path: madeInAlfa.path,
                element: <StubPage pageTitle={madeInAlfa.title}/>
            },
            {
                path: ownDesign.path,
                element: <StubPage pageTitle={ownDesign.title}/>
            },
            {
                path: contactUs.path,
                element: <StubPage pageTitle={contactUs.title}/>,
            },
            {
                path: cart.path,
                element: <StubPage pageTitle={cart.title}/>
            },
        ]
    }
]);
