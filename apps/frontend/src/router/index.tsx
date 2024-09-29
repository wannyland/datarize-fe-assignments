import { createBrowserRouter, Outlet, RouteObject } from 'react-router-dom'
import Home from '../pages/home'

const pages: Array<RouteObject> = [
  {
    path: '/',
    element: <Outlet />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]

const PageRouter = createBrowserRouter(pages)

export default PageRouter
