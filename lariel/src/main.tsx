import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./globals.css";
import App from './app';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import "./globals.css";
import Error from './routes/Pages/Error';
import Home from './routes/Pages/Home';
import Sobre from './routes/PagesRodape/Sobre';
import Presenca from './routes/Pages/Presenca';
import Presentes from './routes/Pages/Presentes';
import Recados from './routes/Pages/Recados';
import Casamento from './routes/Pages/Casamento';
import Dress from './routes/Pages/Dress';
import Historia from './routes/Pages/Historia';
import Momentos from './routes/Pages/Momentos';

const router = createBrowserRouter([
    {path: "/", element: <App/>, errorElement: <Error/>, children: [
        {path: "/", element:<Home/>},
        {path: "/sobre", element:<Sobre/>},
        {path: "/confirmar_presenca", element:<Presenca/>},
        {path: "/lista_presentes", element:<Presentes/>},
        {path: "/mural_recados", element:<Recados/>},
        {path: "/casamento", element:<Casamento/>},
        {path: "/dress_code", element:<Dress/>},
        {path: "/nossa_historia", element:<Historia/>},
        {path: "/momentos", element:<Momentos/>},
    ]},
], {basename: import.meta.env.VITE_BASE_URL});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)