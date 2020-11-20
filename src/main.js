// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";
import InfiniteLoading from "vue-infinite-loading";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import { faCss3, faHtml5, faJs, faVuejs, faWhmcs, faWordpressSimple } from '@fortawesome/free-brands-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'

config.autoAddCss = false;
library.add(faCss3, faWordpressSimple, faJs, faHtml5, faVuejs, faWhmcs)

export default function(Vue, { router, head, isClient }) {
  head.link.push({
    rel: "stylesheet",
    href:
      "https://fonts.googleapis.com/css2?family=Arapey&family=Open+Sans:wght@300;400;600&family=Playfair+Display:wght@400&display=swap"
  });
  // Reg the infinite loading package
  Vue.use(InfiniteLoading);
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
  Vue.component('font-awesome',FontAwesomeIcon);
}
