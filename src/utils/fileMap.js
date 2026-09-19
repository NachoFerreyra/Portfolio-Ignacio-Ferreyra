import { translations } from "@/data/translations";

const fileDefinitions = [
  { id: "readme", route: "/", language: "markdown", color: "orange" },
  { id: "inicio", route: "/inicio", language: "jsx", color: "blue" },
  {
    id: "sobre-mi",
    route: "/sobre-mi",
    language: "jsx",
    color: "green",
  },
  {
    id: "proyectos",
    route: "/proyectos",
    language: "jsx",
    color: "yellow",
  },
  {
    id: "habilidades",
    route: "/habilidades",
    language: "jsx",
    color: "purple",
  },
  {
    id: "contacto",
    route: "/contacto",
    language: "jsx",
    color: "red",
  },
];

export const getExplorerFiles = (language = "en") => {
  const filesById = translations[language].explorer.filesById;
  return fileDefinitions.map((file) => ({ ...file, ...filesById[file.id] }));
};

const cleanPathname = (pathname) => {
  if (!pathname || pathname === "/") return "/";
  return pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
};

export const findFileById = (id, language = "en") =>
  getExplorerFiles(language).find((item) => item.id === id);

export const findFileByRoute = (pathname, language = "en") => {
  const clean = cleanPathname(pathname);
  return getExplorerFiles(language).find((item) => item.route === clean);
};

export const getRouteByFileId = (id) => {
  const file = fileDefinitions.find((item) => item.id === id);
  return file?.route || "/";
};
