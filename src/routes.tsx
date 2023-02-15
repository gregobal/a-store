import {createBrowserRouter} from "react-router-dom";
import {cart, contactUs, madeInAlfa, ownDesign} from "./constants/routes";
import {RootLayout} from "./layouts/root-layout";
import {ErrorPage} from "./pages/error";
import {MadeInAlfaPage} from "./pages/made-in-alfa";
import {MainPage} from "./pages/main-page";
import {NoMatchPage} from "./pages/no-match";
import {OwnDesignPage} from "./pages/own-design";
import {ProductPage} from "./pages/product";
import {groupProductLoader, productLoader} from "./pages/product/loader";
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
                children: [
                    {
                        index: true,
                        element: <MadeInAlfaPage/>
                    },
                    {
                        path: ":id",
                        element: <ProductPage/>,
                        loader: productLoader
                    }
                ]
            },
            {
                path: ownDesign.path,
                children: [
                    {
                        index: true,
                        element: <OwnDesignPage/>
                    },
                    {
                        path: ":id",
                        element: <ProductPage/>,
                        loader: groupProductLoader,
                    }
                ]
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
        ],
        errorElement: <ErrorPage/>
    }
]);
