import { createBrowserRouter, Outlet, RouteObject } from 'react-router-dom'
import Dashboard from '../components/template/DashBoard'
import Home from '../pages/home'

const pages: Array<RouteObject> = [
  {
    path: '/',
    element: <Outlet />,
    children: [
      {
        element: <Dashboard />,
        children: [
          {
            path: '/dashboard',
            element: <Home />,
          },
        ],
      },
    ],
  },
]

const PageRouter = createBrowserRouter(pages)

export default PageRouter
