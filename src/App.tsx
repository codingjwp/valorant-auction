import { RouterProvider } from 'react-router-dom'
import { routerPaths } from './routers'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: Arial, Helvetica, sans-serif;
  }
  li {
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
      <div>
        <RouterProvider router={routerPaths} />
      </div>
    </>
  )
}

export default App
