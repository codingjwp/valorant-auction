import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import AuctionRoom from './pages/AuctionRoom'
import AuctionSetting from './pages/AuctionSetting'


const Routers = () => {
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
          path: "member",
          element: <AuctionSetting />
        },
        {
          path: "auction",
          element: <AuctionRoom />
        }
      ]
    }
  ])

 return <RouterProvider router={routerElements} />
}

export default Routers;