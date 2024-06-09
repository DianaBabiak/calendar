import {
    Navigate,
    Outlet,
    RouteObject,
    RouterProvider,
    createBrowserRouter,
} from 'react-router-dom'

import { Error404 } from '@/pages/error404'
import {SignIn} from "@/components/auth/login/singIn";
import {CalendarPage} from "@/pages/calendar";
import {PreLoader} from "@/components/ui/preloader";
import {Layout} from "@/layout ";
import {MainPage} from "@/pages/main";

const publicRoutes: RouteObject[] = [
    {
        element: <SignIn />,
        path: '/login',
    },
]

const privateRoutes: RouteObject[] = [
    {
        element: <MainPage />,
        path: '/',
    },
    {
        element: <CalendarPage />,
        path: '/calendar',
    },
]

function PrivateRoutes() {
    const isLoading=false
    const isAuthenticated = true

    if (isLoading) {
        return <PreLoader />
    }

    return isAuthenticated ? <Layout /> : <Navigate to={'/login'} />
}

function PublicRoutes() {
    const  isSuccess = true

    return isSuccess ? <Navigate to={'/'} /> : <Outlet />
}

export const router = createBrowserRouter([
    {
        children: [
            {
                children: privateRoutes,
                element: <PrivateRoutes />,
            },
            {
                children: publicRoutes,
                element: <PublicRoutes />,
            },
        ],
    },
    {
        element: <Error404 />,
        path: '*',
    },
])

export const Router = () => {
    return <RouterProvider router={router} />
}