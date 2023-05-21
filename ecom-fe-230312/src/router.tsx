import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';
import AppLayout from './layouts/AppLayout';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Page404 from './pages/Errors/404';

export const ROUTER = {
  BASE: '/'
} as const;

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<AppLayout />}>
      <Route path="/" element={<ProductDetail />} />
      <Route path="*" element={<Page404 />} />

    </Route>
  )
);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
