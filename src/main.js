// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

// Plugins
import Buefy from "buefy";
import "buefy/dist/buefy.css";
import "bulma-helpers/css/bulma-helpers.min.css";

// Local files
// Layouts
import DefaultLayout from "~/layouts/Default.vue";

export default function(Vue, { router, head, isClient }) {
    // Plugins

    head.link.push({
        rel: "stylesheet",
        href: "https://use.fontawesome.com/releases/v5.2.0/css/all.css"
    });
    Vue.use(Buefy, {
        defaultIconPack: "fas" // Font Awesome Solid
    });

    // Set default layout as a global component
    Vue.component("Layout", DefaultLayout);
}