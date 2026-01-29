import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import Root from '../Root/Root';
import Dashboard from '../pages/Dashboard/Dashboard';
import Settings from '../pages/Settings/Settings';
import Profile from '../pages/Settings/Profile';
import Appointment from '../pages/Appoinment/Appointment';

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
        {
            path: '/Profile',
            element: <Profile></Profile>
        },
        {
            path: '/appointment',
            element: <Appointment></Appointment>
        }
    ]
  },
]);
export default Route