// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

// Plugins
import Buefy from "buefy";
import "~/assets/scss/bulma_variables.scss";
import "bulma-helpers/css/bulma-helpers.min.css";

import axios from 'axios'
import VueAxios from 'vue-axios'

import VueDisqus from 'vue-disqus'

// Local files
import DefaultLayout from "~/layouts/Default.vue";
import "~/assets/scss/custom.scss";

export default function(Vue, { router, head, isClient }) {
    // Plugins

    head.link.push({
        rel: "stylesheet",
        href: "https://use.fontawesome.com/releases/v5.2.0/css/all.css"
    });

    Vue.use(Buefy, {
        defaultIconPack: "fas" // Font Awesome Solid
    });

    Vue.use(VueAxios, axios);

    Vue.use(VueDisqus);

    // Set default layout as a global component
    Vue.component("Layout", DefaultLayout);
}