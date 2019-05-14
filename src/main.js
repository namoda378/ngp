// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import RecursiveContent from '~/components/RecursiveContent.vue'
// import RecursiveGlink from '~/components/RecursiveGlink.vue'
import RecursiveGlink from '~/components/RecursiveGlink.2.vue'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'

library.add(faGithub, faTwitter,faHome)

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('faw', FontAwesomeIcon);
  Vue.component('Layout', DefaultLayout);
  Vue.component('Rcomp', RecursiveContent);
  Vue.component('Rlink', RecursiveGlink);


  ["Roboto","ZCOOL+KuaiLe","Roboto+Mono"].forEach(font=>{
    const rel = "stylesheet";
    const href = `https://fonts.googleapis.com/css?family=${font}`;
    head.link.push({rel,href});
  });
}
