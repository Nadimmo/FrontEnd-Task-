import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import Root from '../Root/Root';
import Dashboard from '../pages/Dashboard/Dashboard';
import Settings from '../pages/Settings/Settings';

const Route = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
        {
            path: '/',
            element: <Dashboard></Dashboard>
        },
        
        {
            path: '/settings',
            element: <Settings></Settings>
        },

    ]
  },
]);
export default Route