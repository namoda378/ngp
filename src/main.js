// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import AtypLayout from '~/layouts/Atyp.vue'
import FtypLayout from '~/layouts/Ftyp.vue'

import RecursiveContent from '~/components/RecursiveContent.vue'
import ShowCase from '~/components/ShowCase.vue'
import CenteredText from '~/components/CenteredText.vue'
import DocText from '~/components/DocText.vue'
import IconSpan from '~/components/IconSpan.vue'
import NoContent from '~/components/NoContent.vue'
import SnapScroller from '~/components/NamoScrollsnapFloater/Vcomp.vue'

import RmenuVr from "~/components/NamoRmenuVr/VcompNamoRmenu"
import RmenuHr from "~/components/NamoRmenuHr/VcompNamoRmenu"

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'

import { faHome , faHeart , faBars,faMinusSquare,faChevronLeft } from '@fortawesome/free-solid-svg-icons'

library.add(faGithub, faTwitter,faHome , faHeart,faBars,faMinusSquare,faChevronLeft);

import "~/styles/global.css";

import bootstrap from 'bootstrap-vue';
import jquery from "jquery";

import * as firebase from "firebase/app";
// import * as firebaseui from "firebaseui";
// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import "firebase/functions";



export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  
  Vue.component('Layout', AtypLayout);
  Vue.component('Ftyp', FtypLayout);
  
  Vue.component('faw', FontAwesomeIcon);
  Vue.component('fai', IconSpan);
  Vue.component('Rcomp', RecursiveContent);
  Vue.component('ShowCase', ShowCase);
  Vue.component('Ctext', CenteredText);
  Vue.component('Dtext', DocText);
  Vue.component('NoContent', NoContent);
  Vue.component('SnapScroller', SnapScroller);
  Vue.component('RmenuVr', RmenuVr);
  Vue.component('RmenuHr', RmenuHr);
  
  Vue.prototype.$g = {};
  Vue.prototype.$jfb = {firebase,$:jquery};

  

  ["Roboto","ZCOOL+KuaiLe","Roboto+Mono","Noto+Sans+KR"].forEach(font=>{
    const rel = "stylesheet";
    const href = `https://fonts.googleapis.com/css?family=${font}`;
    head.link.push({rel,href});
  });
  
  head.meta.push({
    name:"viewport",
    content:"width=device-width, user-scalable=no",
  })
}
