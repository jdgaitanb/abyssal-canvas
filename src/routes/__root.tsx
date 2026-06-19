import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl font-bold tracking-tight text-foreground">404</h1>
        <p className="mt-4 text-sm uppercase tracking-[0.3em] text-muted-foreground">
          Signal lost
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full border border-border px-6 py-2 text-xs uppercase tracking-[0.25em] text-foreground transition-colors hover:bg-foreground hover:text-background"
          >
            Return
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-xl text-foreground">Something fractured.</h1>
        <p className="mt-2 text-sm text-muted-foreground">Try again or return home.</p>
        <div className="mt-6 flex justify-center gap-3">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="rounded-full border border-border px-5 py-2 text-xs uppercase tracking-[0.25em] hover:bg-foreground hover:text-background transition-colors"
          >
            Retry
          </button>
          <a href="/" className="rounded-full border border-border px-5 py-2 text-xs uppercase tracking-[0.25em] hover:bg-foreground hover:text-background transition-colors">Home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Juan Gaitán - Portfolio" },
      { name: "description", content: "Portfolio of an AI-in-Architecture designer. Parametric, generative, cinematic." },
      { property: "og:title", content: "Juan Gaitán - Portfolio" },
      { name: "twitter:title", content: "Juan Gaitán - Portfolio" },
      { property: "og:description", content: "Portfolio of an AI-in-Architecture designer. Parametric, generative, cinematic." },
      { name: "twitter:description", content: "Portfolio of an AI-in-Architecture designer. Parametric, generative, cinematic." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/37860091-ef0e-41c9-811c-cdcdbbd4fbbf/id-preview-6b8f08cc--a8a5815b-c3c3-47f5-ae4f-85b2e63bcb66.lovable.app-1781886577131.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/37860091-ef0e-41c9-811c-cdcdbbd4fbbf/id-preview-6b8f08cc--a8a5815b-c3c3-47f5-ae4f-85b2e63bcb66.lovable.app-1781886577131.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Syncopate:wght@400;700&family=Inter:wght@300;400;500;600&display=swap" },
      { rel: "stylesheet", href: appCss },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
