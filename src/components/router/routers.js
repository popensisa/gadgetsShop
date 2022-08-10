import Auth from "../../pages/Auth";
import Basket from "../../pages/Basket";
import Favorite from "../../pages/Favorite";
import Main from "../../pages/Main";
import { AUTH_PAGE, BASKET_PAGE, FAVORITE_PAGE, MAIN_PAGE } from "./consts";


export const publicRoutes = [
    {
        path: MAIN_PAGE,
        element: <Main/>
    },
    {
        path: AUTH_PAGE,
        element: <Auth/>
    },
    {
        path: FAVORITE_PAGE,
        element: <Favorite/>
    },
    {
        path: BASKET_PAGE,
        element: <Basket/>
    },
]