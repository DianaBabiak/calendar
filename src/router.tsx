import {createBrowserRouter, Navigate, Outlet, RouteObject, RouterProvider,} from 'react-router-dom'

import {Error404} from '@/pages/error404'
import {SignIn} from "@/components/auth/login/singIn";
import {CalendarPage} from "@/pages/calendar";
import {Layout} from "@/layout ";
import {MainPage} from "@/pages/main";
import {useAppSelector} from "@/state/store.ts";
import {isAuth} from "@/state/selectors.ts";

const publicRoutes: RouteObject[] = [
    {
        element: <SignIn/>,
        path: '/login',
    },
]

const privateRoutes: RouteObject[] = [
    {
        element: <MainPage/>,
        path: '/',
    },
    {
        element: <CalendarPage/>,
        path: '/calendar',
    },
]

function PrivateRoutes() {
    const isAuthenticated = useAppSelector(isAuth)

    return isAuthenticated ? <Layout/> : <Navigate to={'/login'}/>
}

function PublicRoutes() {

    const isAuthenticated = useAppSelector(isAuth)

    return isAuthenticated ? <Navigate to={'/'}/> : <Outlet/>
}

export const router = createBrowserRouter([
    {
        children: [
            {
                children: privateRoutes,
                element: <PrivateRoutes/>,
            },
            {
                children: publicRoutes,
                element: <PublicRoutes/>,
            },
        ],
    },
    {
        element: <Error404/>,
        path: '*',
    },
])

export const Router = () => {
    return <RouterProvider router={router}/>
}