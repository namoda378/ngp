// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import FtypLayout from '~/layouts/Ftyp.vue'

import RecursiveContent from '~/components/RecursiveContent.vue'
import ShowCase from '~/components/ShowCase.vue'
import CenteredText from '~/components/CenteredText.vue'
import DocText from '~/components/DocText.vue'
import NoContent from '~/components/NoContent.vue'
import SnapScroller from '~/components/NamoScrollsnapFloater/Vcomp.vue'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faHome , faHeart } from '@fortawesome/free-solid-svg-icons'

library.add(faGithub, faTwitter,faHome , faHeart);

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  
  Vue.component('Layout', DefaultLayout);
  Vue.component('FtypLayout', FtypLayout);
  
  Vue.component('faw', FontAwesomeIcon);
  Vue.component('Rcomp', RecursiveContent);
  Vue.component('ShowCase', ShowCase);
  Vue.component('Ctext', CenteredText);
  Vue.component('Dtext', DocText);
  Vue.component('NoContent', NoContent);
  Vue.component('SnapScroller', SnapScroller);


  ["Roboto","ZCOOL+KuaiLe","Roboto+Mono","Noto+Sans+KR"].forEach(font=>{
    const rel = "stylesheet";
    const href = `https://fonts.googleapis.com/css?family=${font}`;
    head.link.push({rel,href});
  });
}
