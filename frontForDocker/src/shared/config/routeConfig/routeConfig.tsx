import { RouteProps } from 'react-router-dom';

import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { ProfilePage } from 'pages/ProfilePage';
import { NotFoundPage } from 'pages/NotFoundPage';

export type TAppRoute = RouteProps & {
    authOnly?: boolean
}

export enum AppRoutes {
    MAIN = 'main',
    TASKS = 'tasks',
    USERS = 'users',
    PROFILE = 'profile',
    NOT_FOUND = 'notFound',

}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.TASKS]: '/tasks',
    [AppRoutes.USERS]: '/users',
    [AppRoutes.PROFILE]: '/profile',
    [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Array<TAppRoute> = [
    {
        path: RoutePath.main,
        element: <MainPage />,
    },
    {
        path: RoutePath.tasks,
        element: <AboutPage />,
    },
    {
        path: RoutePath.users,
        element: <AboutPage />,
    },
    {
        path: RoutePath.profile,
        element: <ProfilePage />,
    },
    {
        path: RoutePath.notFound,
        element: <NotFoundPage />,
    },
];
