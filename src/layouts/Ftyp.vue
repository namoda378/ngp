<template lang="pug">

  .template-root  
    
    header.header
      g-link.navlink(to="/") Namo
    
    nav.nav(v-if="nametreeroot")
      Rmenu(:nametreeroot="nametreeroot" :RmenuListener="rmenulistener")

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
import Rmenu from "~/components/NamoRmenu/VcompNamoRmenu"

export default {
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
  data(){
    return {
      nametreeroot:null,
      rmenulistener:null,
    }
  },
  components:{
    Rmenu,
  },
  methods:{
    log(s){
      console.log(s);
    },
    onWindowResize(){
      
    },
  },
}
</script>


<style lang="scss">

$floater-padding-left: 300px;

body {
  font-family: Roboto,'Roboto Mono','ZCOOL KuaiLe',Arial;
  margin:0;
  background:#fcffe9;

  .template-root{
    display: grid; 
    width:100vw;
    height:100vh;
    
    grid-template-rows: 70px auto;
    grid-template-columns: 300px auto;

    .header{
      grid-column: 1/3;
      grid-row:1;
      z-index: 200;
      font-family:'ZCOOL KuaiLe';
      background : #132;
      display: flex;
      flex-direction: row;
      justify-content: left;
      align-items: center;
      padding-left:30px;
      pointer-events: auto;
      .navlink{
        color:#fff;
        display: block;
        font-size : 40px;
        text-decoration: none;
      }
    }

    .content{
      padding : 0;
    }

    .nav{ 

        grid-row: 2;
        grid-column: 1;
        pointer-events: auto;
        font-family: "Roboto Mono";
        background:hsla(100,87%,15%,1);
        overflow-y: auto;
        overflow-x: hidden;
        
        
        width:$floater-padding-left;
        flex-grow: 1;

        @media screen and (max-width: 720px) {
          width: 100%;
          flex-grow: 0;
        }
    }

  }

}
</style>
