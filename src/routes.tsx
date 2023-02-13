import {createBrowserRouter} from "react-router-dom";
import {cart, contactUs, madeInAlfa, ownDesign} from "./constants/routes";
import {RootLayout} from "./layouts/root-layout";
import {MadeInAlfaPage} from "./pages/made-in-alfa";
import {MainPage} from "./pages/main-page";
import {NoMatchPage} from "./pages/no-match";
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
                element: <MadeInAlfaPage/>
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
                element: <NoMatchPage/>
            }
        ]
    }
]);
