import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import ReadmePage from "@/containers/pages/ReadmePage";
import InicioPage from "@/containers/pages/InicioPage";
import SobreMiPage from "@/containers/pages/SobreMiPage";
import ProyectosPage from "@/containers/pages/ProyectosPage";
import HabilidadesPage from "@/containers/pages/HabilidadesPage";
import ContactoPage from "@/containers/pages/ContactoPage";
import NotFoundPage from "@/containers/pages/NotFoundPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <ReadmePage /> },
      { path: "inicio", element: <InicioPage /> },
      { path: "sobre-mi", element: <SobreMiPage /> },
      { path: "proyectos", element: <ProyectosPage /> },
      { path: "habilidades", element: <HabilidadesPage /> },
      { path: "contacto", element: <ContactoPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

export default router;
