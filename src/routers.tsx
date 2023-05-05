import { createBrowserRouter } from 'react-router-dom';
import { RouterItems } from './types/routerType';
import QuoteMain from './quotes/QuoteMain';
import Portfolio from './Portfolio';

// const childrenInfo: RouterItems[] = [
// ]

const routerInfo: RouterItems[] = [
  {
    path: "/",
    element: <Portfolio/>,
  },
  {
    path: "quotes",
    label: "명언 모음집",
    element: <QuoteMain/>,
  }
];

export const routerPaths = createBrowserRouter(
  routerInfo.map((router) => {
    return {
      path: router.path,
      element: router.element,
      errorElement: router.errorElement,
      children: router.children
    }
  })
);
