import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import './style/slider.module.css'
import { ROUTES } from './routes/routes';

import 'bootstrap/dist/css/bootstrap.min.css';
import { AdminContextProvider } from './context/AdminContext';
import { UserContextProvider } from './context/UserContext';
import { LogoContextProvider } from './context/LogoContext';
import { SliderContextProvider } from './context/SliderContext';
import { ServiceContextProvider } from './context/ServiceContext';
import { CategoryContextProvider } from './context/CategoryContext';
function App() {
  const routes = createBrowserRouter(ROUTES)
  return (

    <>

      <AdminContextProvider>
        <UserContextProvider>
          <LogoContextProvider>
            <SliderContextProvider>
              <ServiceContextProvider>
                <CategoryContextProvider>

                  <RouterProvider router={routes}>

                  </RouterProvider>
                </CategoryContextProvider>
              </ServiceContextProvider>
            </SliderContextProvider>
          </LogoContextProvider>
        </UserContextProvider>
      </AdminContextProvider>

    </>
  );
}

export default App;
