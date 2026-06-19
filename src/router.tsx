import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    // Adapta los enlaces internos automáticamente según el entorno (Lovable o GitHub Pages)
    basepath: import.meta.env.BASE_URL || "/",
  });

  return router;
};
