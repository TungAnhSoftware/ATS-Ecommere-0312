import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';
import AppLayout from './layouts/AppLayout';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Page404 from './pages/Errors/404';
import Home from './pages/Home';
import StoreFinder from './pages/StoreFinder';

export const ROUTER = {
  BASE: '/',
  PRODUCT: '/product',
  STORE_FINDER: '/store-finder'
} as const;

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<AppLayout />}>
      <Route path={ROUTER.BASE} element={<Home />} />
      <Route path={ROUTER.PRODUCT} element={<ProductDetail />} />
      <Route path={ROUTER.STORE_FINDER} element={<StoreFinder />} />
      <Route path="*" element={<Page404 />} />
    </Route>
  )
);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
