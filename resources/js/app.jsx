import "./bootstrap";
import "../css/app.css";
import "./i18n";

import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { Suspense } from "react";
import Loader from "./Components/Loader";

const appName = import.meta.env.VITE_APP_NAME || "Laravel";

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob("./Pages/**/*.jsx")
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <Suspense fallback={<Loader />}>
                <App {...props} />
            </Suspense>
        );
    },
    progress: {
        color: "#4B5563",
    },
});
