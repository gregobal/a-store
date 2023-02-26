import {createBrowserRouter} from "react-router-dom";
import {getMadeInAlfa, getYourDesign} from "./api";
import {cart, contactUs, madeInAlfa, ownDesign, product} from "./constants/routes";
import {RootLayout} from "./layouts/root-layout";
import {ErrorPage} from "./pages/error";
import {MadeInAlfaPage} from "./pages/made-in-alfa";
import {MainPage} from "./pages/main-page";
import {NoMatchPage} from "./pages/no-match";
import {OwnDesignPage} from "./pages/own-design";
import {ProductPage} from "./pages/product";
import {productLoader} from "./pages/product/loader";
import {StubPage} from "./pages/stub-page";

export const router = createBrowserRouter([
    {
        path: "/",
        children: [
            {
                element: <RootLayout wide={true}/>,
                children: [
                    {
                        index: true,
                        element: <MainPage/>
                    },
                ]
            },
            {
                element: <RootLayout/>,
                children: [
                    {
                        path: madeInAlfa.path,
                        element: <MadeInAlfaPage/>,
                        loader: () => getMadeInAlfa()
                    },
                    {
                        path: ownDesign.path,
                        element: <OwnDesignPage/>,
                        loader: () => getYourDesign()
                    },
                    {
                        path: `${product.path}/:id`,
                        element: <ProductPage/>,
                        loader: productLoader
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
        ],
        errorElement: <ErrorPage/>
    }
]);
