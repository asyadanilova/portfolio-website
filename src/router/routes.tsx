import { RouteObject } from 'react-router-dom';
import Layout from '@/pages/Layout/Layout';
import NotFound from '@/pages/NotFound/NotFound';

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
        path: '/contact',
        element: <Layout />,
    },
    {
        path: '*',
        element: <NotFound />,
    },
];

export default routes;