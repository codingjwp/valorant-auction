import { Suspense } from 'react'
import { RouterProvider } from 'react-router-dom'
import { routerPaths } from './routers'
import { createGlobalStyle } from 'styled-components'
import Loading from './Loading'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: Arial, Helvetica, sans-serif;
  }
  ul, li {
    list-style-type: none;
  }
  a {
    text-decoration: none;
  }
`


function App() {
  return (
    <>
    <GlobalStyle />
    <Suspense fallback={<Loading />}>
      <RouterProvider router={routerPaths} />
    </Suspense>
    </>
  )
}

export default App
