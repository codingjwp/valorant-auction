import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import Room from './pages/Room'


export default function Routers() {
  const routerElements = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <div>error</div>,
      children: [
        {
          index: true,
          element: <Home />  
        },
        {
          path: "rooms",
          element: <Room />
        }
      ]
    }
  ])

 return <RouterProvider router={routerElements} />
}