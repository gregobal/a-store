import {createBrowserRouter} from "react-router-dom";
import {getMadeInAlfa, getYourDesign} from "./api";
import {contactUs, madeInAlfa, ownDesign, policy, product} from "./constants/routes";
import {RootLayout} from "./layouts/root-layout";
import {ContactPage} from "./pages/contact";
import {ErrorPage} from "./pages/error";
import {MadeInAlfaPage} from "./pages/made-in-alfa";
import {MainPage} from "./pages/main-page";
import {NoMatchPage} from "./pages/no-match";
import {OwnDesignPage} from "./pages/own-design";
import {PolicyPage} from "./pages/policy";
import {ProductPage} from "./pages/product";
import {productLoader} from "./pages/product/loader";

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
                        element: <ContactPage/>,
                    },
                    {
                        path: policy.path,
                        element: <PolicyPage/>,
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
