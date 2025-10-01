import { RouteObject } from 'react-router-dom';
import Layout from '@/pages/Layout/Layout';
import NotFound from '@/pages/NotFound/NotFound';
import Vacancies from '@/pages/Vacancies/Vacancies';

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <Layout />,
    },
    {
        path: '/about',
        element: <Layout />,
    },
    {
        path: '/cars',
        element: <Layout />,
    },
    {
        path: '/drivers',
        element: <Layout />,
    },
    {
        path: '/vacancies',
        element: <Vacancies />,
    },
    {
        path: '/contact',
        element: <Layout />,
    },
    {
        path: '*',
        element: <NotFound />,
    },
];

export default routes;