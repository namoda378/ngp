<template lang="pug">

  .template-root  
    .grid-tmpl.floater
      header.header
        g-link.navlink(to="/") Namo
        faw.hambug(v-show="whichHrVr==1" :icon="showHr?'minus-square':'bars'" @click="showHr=!showHr")
      nav.nav(v-if="nametreeroot")
        RmenuVr(v-if="whichHrVr==0" :nametreeroot="nametreeroot" :RmenuListener="rmenulistener")
        RmenuHr(v-else-if="whichHrVr==1 && showHr" :nametreeroot="nametreeroot" :RmenuListener="rmenulistener")


    .grid-tmpl.non-floater
      .content
        slot

    
    
    
</template>

<static-query>
  query {
      allPage{
        path
      }
  }
</static-query>

<script>
import pathsToNameTree from "~/util/pathsToNameTree"
import { windowResizeListener,routeSetter } from "~/mixins"

export default {
  name:"Atyp",
  mixins: [windowResizeListener],
  props:{
    layoutParams:Object,
  },
  created(){
    const {allPage} = this.$static;
    
    this.nametreeroot = pathsToNameTree(allPage.map((page)=>page.path));
    this.rmenulistener = {
      goto:(path)=>{
        this.$router.push(path);
      }
    };
  },
  mounted(){
    this.onWindowResize();
  },
  data(){
    return {
      blur_consumable:false,
      whichHrVr:0,
      showHr:false,
      nametreeroot:null,
      rmenulistener:null,
    }
  },
  watch:{
    showHr(to){
      console.log(to);
    }
  },
  methods:{
    log(s){
      console.log(s);
    },
    onWindowResize(){
      const body = document.getElementsByTagName('body')[0];
      if(body.clientWidth < 1200){
        this.whichHrVr = 1;
      }else{
        this.whichHrVr = 0;
      }
    },
  },
}
</script>


<style lang="scss">

body {
  font-family: Roboto,'Roboto Mono','ZCOOL KuaiLe',Arial;
  margin:0;
  background:#fcffe9;

  .template-root{
    position: relative;
    .grid-tmpl{
      display: grid; 
      grid-template-rows: 70px auto;
      grid-template-columns: 300px auto;
      @media screen and (max-width: 1200px) {
        grid-template-rows: 70px max-content auto;
        grid-template-columns: 100%;
      }
    }

    .floater{
      z-index: 200;
      pointer-events: none;
      position: fixed;
      width:100vw;
      height:100vh;
      > *{
        pointer-events: auto;
      }
    }

    .non-floater{
      position: relative;
      z-index: 0;
      
    }

  }

  .header{
      font-family:'ZCOOL KuaiLe';
      background : #132;
      display: flex;
      justify-content: space-between;
      align-items: center;
      
      padding-left:30px;
      padding-right:30px;
      pointer-events: auto;
      .navlink{
        line-height: 100%;
        display: inline-block;
        position: relative;
        color:#fff;
        font-size : 40px;
        text-decoration: none;
      }
      .hambug{
        color:#fff;
        font-size:31px;
      }

      grid-column: span 2;
      @media screen and (max-width: 1200px) {
        grid-column: span 1;
      }
  }

  .content{
    grid-row: 2;
    grid-column: 2;
    @media screen and (max-width: 1200px) {
      grid-column: 1;
      grid-row: 3;
    }
  }

}
</style>
