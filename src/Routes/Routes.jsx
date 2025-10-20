import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Page/Home";
import CategoryNews from "../Page/CategoryNews";
import Login from "../Page/Login";
import Register from "../Page/Register";
import AuthLayout from "../Layouts/AuthLayout";
import NewsDetails from "../Page/NewsDetails";
import PrivateRoute from "./PrivateRoute";
import Loading from "../Components/Loading";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        hydrateFallbackElement: <Loading />,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: 'category/:id',
                loader: () => fetch('../news.json'),
                hydrateFallbackElement: <Loading />,
                Component: CategoryNews
            },
        ]
    },
    {
        path: 'auth',
        Component: AuthLayout,
        children: [
            {
                path: '/auth/login',
                Component: Login
            },
            {
                path: '/auth/register',
                Component: Register
            },
        ]
    },
    {
        path: '/news-details/:id',
        loader: () => fetch('../news.json'),
        hydrateFallbackElement: <Loading />,
        element: <PrivateRoute>
            < NewsDetails></NewsDetails>
        </PrivateRoute>
    },
])