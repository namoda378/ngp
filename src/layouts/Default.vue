<template lang="pug">

  div  
    
    .floater
      header.header
        g-link.navlink(to="/") Namo
      
      nav.nav
        Rmenu(:nametreeroot="nametreeroot" :RmenuListener="rmenulistener")

    .non-floater
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
  data(){
    const {allPage} = this.$static;
    
    const nametreeroot = pathsToNameTree(allPage.map((page)=>page.path));
    const rmenulistener = {
      goto:(path)=>{
        this.$router.push(path);
      }
    };
    
    return {
      nametreeroot,
      rmenulistener,
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
  metaData(){
    return {

    }
  }
}
</script>


<style lang="scss">

$floater-padding-left: 300px;

body {
  font-family: Roboto,'Roboto Mono','ZCOOL KuaiLe',Arial;
  margin:0;
  background:#fcffe9;

  .floater{
    background:none;
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-content: flex-start;
    width:100vw;
    height:100vh;
    pointer-events: none;
    z-index: 1000;

    header{
    font-family:'ZCOOL KuaiLe';
    height: 70px;
    top:0; left: 0;right: 0;
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

    .nav{ 
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
  
  .non-floater{
    padding: 70px 0 0 $floater-padding-left;
    @media screen and (max-width: 720px) {
        padding: 200px 0 0 0;
    }

    .content{
      padding : 20px;
    }
  }

}
</style>
