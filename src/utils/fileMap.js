export const explorerFiles = [
  {
    id: "readme",
    name: "README.md",
    route: "/",
    language: "markdown",
    color: "orange",
    label: "README",
  },
  {
    id: "inicio",
    name: "inicio.jsx",
    route: "/inicio",
    language: "jsx",
    color: "blue",
    label: "Inicio",
  },
  {
    id: "sobre-mi",
    name: "sobre-mi.jsx",
    route: "/sobre-mi",
    language: "jsx",
    color: "green",
    label: "Sobre mi",
  },
  {
    id: "proyectos",
    name: "proyectos.jsx",
    route: "/proyectos",
    language: "jsx",
    color: "yellow",
    label: "Proyectos",
  },
  {
    id: "habilidades",
    name: "habilidades.jsx",
    route: "/habilidades",
    language: "jsx",
    color: "purple",
    label: "Habilidades",
  },
  {
    id: "contacto",
    name: "contacto.jsx",
    route: "/contacto",
    language: "jsx",
    color: "red",
    label: "Contacto",
  },
];

const cleanPathname = (pathname) => {
  if (!pathname || pathname === "/") return "/";
  return pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
};

export const findFileById = (id) => explorerFiles.find((item) => item.id === id);

export const findFileByRoute = (pathname) => {
  const clean = cleanPathname(pathname);
  return explorerFiles.find((item) => item.route === clean);
};

export const getRouteByFileId = (id) => {
  const file = findFileById(id);
  return file?.route || "/";
};
