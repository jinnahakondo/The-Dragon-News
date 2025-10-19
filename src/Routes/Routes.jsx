import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Page/Home";
import CategoryNews from "../Page/CategoryNews";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: 'category/:id',
                loader: () => fetch('../news.json'),
                Component: CategoryNews
            },
        ]
    },
    {
        path: 'auth',
        element: <h1>Auth !</h1>
    },
    {
        path: 'news',
        element: <h1>news !</h1>
    },
])