import {createBrowserRouter} from "react-router-dom";
import {cart, contactUs, madeInAlfa, ownDesign} from "./constants/routes";
import {RootLayout} from "./layouts/root-layout";
import {MadeInAlfa} from "./pages/made-in-alfa";
import {MainPage} from "./pages/main-page";
import {NoMatch} from "./pages/no-match";
import {StubPage} from "./pages/stub-page";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout wide={true}/>,
        children: [
            {
                index: true,
                element: <MainPage/>
            },
        ]
    },
    {
        path: "/",
        element: <RootLayout/>,
        children: [
            {
                path: madeInAlfa.path,
                element: <MadeInAlfa />
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
            {
                path: "*",
                element: <NoMatch />
            }
        ]
    }
]);
