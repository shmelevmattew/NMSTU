import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import TaskPage from 'pages/TaskPage/ui/TaskPage';
import { NewsPage } from 'pages/NewsPage';
import { TeachersPage } from 'pages/TeachersPage';

export enum AppRoutes{
    MAIN ='main',
    ABOUT='about',
    TEACHERS='teachers',
    TASKS='tasks',
    NEWS='news',
}
export const RoutePath:Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.TEACHERS]: '/teachers',
    [AppRoutes.TASKS]: '/tasks',
    [AppRoutes.NEWS]: '/news',
};

export const RouteConfig:Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage />,
    },
    [AppRoutes.TASKS]: {
        path: RoutePath.tasks,
        element: <TaskPage />,
    },
    [AppRoutes.NEWS]: {
        path: RoutePath.news,
        element: <NewsPage />,
    },
    [AppRoutes.TEACHERS]: {
        path: RoutePath.teachers,
        element: <TeachersPage />,
    },
};
