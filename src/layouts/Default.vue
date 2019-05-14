<template lang="pug">

  div  
    
    .floater
      header.header
        g-link.navlink(to="/") Namo
      
      nav.nav
        Rlink.d1(v-for="(v,k) in nametree" :nametree="v" :key="k")

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

export default {
  data(){
    return {
      nametree: null,
    }
  },
  beforeMount(){
    const {allPage} = this.$static;
    

    const root = pathsToNameTree(allPage.map((page)=>page.path));
    this.nametree = root.children;
  },
  methods:{
    log(s){
      console.log(s);
    }
  },
  metaData(){
    console.log(this.$static);
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

      .navlink{
        color:#fff;
        display: block;
        font-size : 40px;
        text-decoration: none;
      }
    }

    .nav{ 
      font-family: "Roboto Mono";
      width:$floater-padding-left;
      flex-grow: 1;
      background:hsla(100,87%,15%,1);
      overflow-y: auto;
      overflow-x: visible;
      .navlink{
        display: block;
        color:#336;
        text-decoration: none;
        padding:15px;
      }
    }
  }  
  
  .non-floater{
    padding: 70px 0 0 $floater-padding-left;
    .content{
      padding : 20px;
    }
  }

}
</style>
