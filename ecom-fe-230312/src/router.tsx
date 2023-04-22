import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';
import AppLayout from './layouts/AppLayout';
import Page404 from './pages/Errors/404';
import Home from './pages/Home';
import ProductCart from './pages/ProductCart/ProductCart';

export const ROUTER = {
  BASE: '/'
} as const;

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<AppLayout />}>
      <Route path="/" element={<ProductCart />} />
      <Route path="*" element={<Page404 />} />

    </Route>
  )
);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
